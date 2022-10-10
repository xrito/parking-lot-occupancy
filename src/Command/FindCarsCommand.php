<?php

namespace Parking\Command;
use Parking\Service\ParkingService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FindCarsCommand extends Command
{
    public function __construct(private ParkingService $parkingService)
    {
        parent::__construct("cars:find");
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln("Find cars");
        $output->writeln( "Свободные места под номером: " .  implode(", ", $this->parkingService->getFreeSpots()));
        $this->parkingService->drawSpotPredictions();
        $output->writeln("Done");
        return 0;
    }

}
