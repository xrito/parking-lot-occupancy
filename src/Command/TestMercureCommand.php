<?php

namespace Parking\Command;

use Doctrine\ODM\MongoDB\DocumentManager;
use GuzzleHttp\Promise\Utils;
use Parking\Document\Parking;
use Parking\Model\Prediction;
use Parking\Service\CameraService;
use Parking\Service\ParkingService;
use Parking\Service\VisionService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

class TestMercureCommand extends Command
{

    private float $ttlInSeconds = 0.3;

    public function __construct(
        private HubInterface $hub,
        private VisionService $visionService,
        private DocumentManager $documentManager,
        private ParkingService $parkingService,
        private CameraService $cameraService)
    {
        parent::__construct("mercure:test");
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $repository = $this->documentManager->getRepository(Parking::class);
        $min = 1000000;
        $max = 0;
        $ind = 0;
        while (true) {
            $repository->clear();
            $parkingList = $repository->findAll();
            $start = microtime(true);
            $this->detectAsync($parkingList);
            $end = microtime(true);
            $times = round(($end - $start) * 1000);
            if ($ind > 0) {
                $min = min($min, $times);
                $max = max($max, $times);
            }
            $output->writeln("{$times}ms (min: {$min}ms, max: {$max}ms)");
            $ind++;
            usleep($this->ttlInSeconds * 1000000);
        }
    }


    /**
     * @param Parking[] $parkingList
     * @return void
     */
    private function detect(array $parkingList): void
    {
        foreach ($parkingList as $parking) {
            if ($this->cameraService->isAvailableStream($parking->getId())) {
                $predictions = $this->parkingService->getCarPredictions($parking->getId());
                $this->hub->publish(
                    new Update(
                        "/parking/free_spots/{$parking->getId()}",
                        json_encode(
                            $this->parkingService->getFreeSpotsByPredictions($parking->getId(), $predictions)
                        )
                    )
                );
                $this->hub->publish(
                    new Update(
                        "/parking/predictions/{$parking->getId()}",
                        json_encode($predictions)
                    )
                );
            }
        }
    }

    /**
     * @param Parking[] $parkingList
     * @return void
     */
    private function detectAsync(array $parkingList): void
    {
        $promises = [];
        foreach ($parkingList as $parking) {
            if ($this->cameraService->isAvailableStream($parking->getId())) {
                $promises[$parking->getId()] = $this->parkingService->getCarPredictionsAsync($parking->getId());
            }
        }
        $responses = Utils::settle($promises)->wait();
        foreach ($responses as $id => $response) {
            /** @var Prediction[] $predictions */
            $predictions = $response['value'];
            if ($response['state'] === 'fulfilled') {
                $this->hub->publish(
                    new Update(
                        "/parking/free_spots/{$id}",
                        json_encode(
                            $this->parkingService->getFreeSpotsByPredictions($id, $predictions)
                        )
                    )
                );
                $this->hub->publish(
                    new Update(
                        "/parking/predictions/{$id}",
                        json_encode($predictions)
                    )
                );
            }
        }
    }
}
