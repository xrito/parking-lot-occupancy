<?php

namespace Parking\Command;

use Doctrine\ODM\MongoDB\DocumentManager;
use GuzzleHttp\Promise\Utils;
use Parking\Document\Parking;
use Parking\Model\Prediction;
use Parking\Service\CameraService;
use Parking\Service\MercureHubService;
use Parking\Service\ParkingService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Stopwatch\Stopwatch;

class PredictionWorkerCommand extends Command
{

    private bool $shouldContinue = true;
    private float $ttlInSeconds = 0.14;
    private string $freeSpotTopic = '/parking/free_spots/';
    private string $predictionTopic = '/parking/predictions/';

    public function __construct(
        private MercureHubService $mercureHubService,
        private HubInterface $hub,
        private DocumentManager $documentManager,
        private ParkingService $parkingService,
        private CameraService $cameraService)
    {
        parent::__construct("prediction:worker");
    }


    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $progressBar = new ProgressBar($output);
        $progressBar->setFormat("%message%");
        $progressBar->setMessage("Worker started");

        foreach ($progressBar->iterate($this->detectFreeSpots()) as $message) {
            $progressBar->setMessage($message);
        }

        return Command::SUCCESS;
    }

    /**
     * @return \Generator<string>
     */
    private function detectFreeSpots(): \Generator
    {
        $repository = $this->documentManager->getRepository(Parking::class);
        $stopwatch = new Stopwatch();
        $min = 1000000;
        $max = 0;
        $first = true;
        while (true) {
            $stopwatch->reset();
            $stopwatch->start('detectFreeSpots');
            $repository->clear();
            $parkingList = $repository->findAll();
            $listenedParkingIds = $this->getListenedParkingIds();
            $listenedParkingList = array_filter(
                $parkingList,
                fn(Parking $parking) => in_array($parking->getId(), $listenedParkingIds)
            );
            $this->detectAsync($listenedParkingList);
            $event = $stopwatch->stop('detectFreeSpots');
            if (!$first) {
                $min = min($min, $event->getDuration());
                $max = max($max, $event->getDuration());
            }
            $first = false;
            if (!empty($listenedParkingList)) {
                yield sprintf(
                    "%dms (min: %dms, max: %dms) - count : %d",
                    $event->getDuration(),
                    $min,
                    $max,
                    count(
                        $listenedParkingList
                    )
                );
            } else {
                yield "Waiting...\r\n";
            }
            usleep($this->ttlInSeconds * 1000000);
        }
    }

    /**
     * @return string[]
     */
    private function getListenedParkingIds(): array
    {
        $subscriptions = $this->mercureHubService->getSubscriptions();
        $listenedParkingIds = [];
        foreach ($subscriptions as $subscription) {
            if (str_starts_with($subscription['topic'], $this->freeSpotTopic)) {
                $parkingId = str_replace($this->freeSpotTopic, '', $subscription['topic']);
                $listenedParkingIds[] = $parkingId;
            } elseif (str_starts_with($subscription['topic'], $this->predictionTopic)) {
                $parkingId = str_replace($this->predictionTopic, '', $subscription['topic']);
                $listenedParkingIds[] = $parkingId;
            }
        }
        return $listenedParkingIds;
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
                        "{$this->freeSpotTopic}{$parking->getId()}",
                        json_encode(
                            $this->parkingService->getFreeSpotsByPredictions($parking->getId(), $predictions)
                        )
                    )
                );
                $this->hub->publish(
                    new Update(
                        "{$this->predictionTopic}{$parking->getId()}",
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
                        "{$this->freeSpotTopic}{$id}",
                        json_encode(
                            $this->parkingService->getFreeSpotsByPredictions($id, $predictions)
                        )
                    )
                );
                $this->hub->publish(
                    new Update(
                        "{$this->predictionTopic}{$id}",
                        json_encode($predictions)
                    )
                );
            }
        }
    }
}
