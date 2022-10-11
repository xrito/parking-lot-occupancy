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

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $update = new Update("/books/1", json_encode($this->parkingService->getCarPredictions()));
        $this->hub->publish($update);
        $output->writeln("Published");
        return 0;
    }


}
