<?php

namespace Parking\Command;

use Doctrine\ODM\MongoDB\DocumentManager;
use Parking\Document\Parking;
use Parking\Service\CameraService;
use Parking\Service\ParkingService;
use Symfony\Component\Cache\Adapter\ApcuAdapter;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Contracts\Cache\ItemInterface;

class TestMercureCommand extends Command
{

    private float $ttlInSeconds = 0.3;
    public function __construct(
        private HubInterface $hub,
        private DocumentManager $documentManager,
        private ParkingService $parkingService,
        private CameraService $cameraService)
    {
        parent::__construct("mercure:test");
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $cache = new ApcuAdapter();
        $repository = $this->documentManager->getRepository(Parking::class);
        while (true) {
            $repository->clear();
            $parkingList = $repository->findAll();
            $start = microtime(true);
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
            $end = microtime(true);
            $output->writeln("Time: " . round(($end - $start) * 1000) . "ms");
            usleep($this->ttlInSeconds * 1000000);
        }
    }


}
