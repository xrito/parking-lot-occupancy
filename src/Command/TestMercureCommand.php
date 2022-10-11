<?php

namespace Parking\Command;

use Parking\Service\ParkingService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

class TestMercureCommand extends Command
{
    public function __construct(private HubInterface $hub, private ParkingService $parkingService)
    {
        parent::__construct("mercure:test");
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->hub->publish(new Update("/predictions", json_encode($this->parkingService->getCarPredictionAndSpot())));
        $this->hub->publish(new Update("/freeSpots", json_encode($this->parkingService->getFreeSpots())));
        $output->writeln("Published");
        return 0;
    }


}
