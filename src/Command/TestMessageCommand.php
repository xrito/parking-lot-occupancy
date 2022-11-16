<?php

namespace Parking\Command;

use Parking\Message\UpdateStreamConfig;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\NoAutoAckStamp;

class TestMessageCommand extends Command
{
    public function __construct(private MessageBusInterface $bus)
    {
        parent::__construct("test:message");
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln("Test message");

        $this->bus->dispatch(new UpdateStreamConfig('dasdasddf') );
        return self::SUCCESS;
    }


}
