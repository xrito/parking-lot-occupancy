<?php

namespace Camera;

use Camera\Message\JsonMessageSerializer;
use Camera\Message\UpdateStreamConfig;
use Camera\Service\ConfigService;
use Symfony\Component\Messenger\Bridge\Redis\Transport\Connection;
use Symfony\Component\Messenger\Bridge\Redis\Transport\RedisReceiver;
use Symfony\Component\Messenger\Handler\HandlersLocator;
use Symfony\Component\Messenger\MessageBus;
use Symfony\Component\Messenger\Middleware\HandleMessageMiddleware;
use Symfony\Component\Messenger\Worker as MessageWorker;
use Symfony\Component\Process\Process;

final class Worker
{

    /**
     * @param ConfigService $configService
     * @param Process[] $streamProcesses
     * @param ?Process $ffServerProcess
     * @param string $ffserver
     */
    public function __construct(
        private ConfigService $configService,
        private array $streamProcesses = [],
        private ?Process $ffServerProcess = null,
        private string $ffserver = 'http://127.0.0.1:8090')
    {
    }

    public function run(): void
    {
        $streams = $this->configService->getStreams();
        $this->startFFServer($streams);
        $this->runFFStreams($streams);
        $bus = $this->createMessageBus();
        $receivers = $this->createReceivers();
        $worker = new MessageWorker($receivers, $bus);
        $worker->run();
    }

    private function createReceivers(): array
    {
        $connection = Connection::fromDsn($_ENV['MESSENGER_TRANSPORT_DSN']);
        return [
            new RedisReceiver($connection, new JsonMessageSerializer()),
        ];
    }

    private function createMessageBus(): MessageBus
    {
        return new MessageBus([
            new HandleMessageMiddleware(
                new HandlersLocator([
                    UpdateStreamConfig::class => [
                        function () {
                            error_log('Starting update stream config');
                            $streams = $this->configService->getStreams();
                            $this->restartFFServer($streams);
                            $this->restartFFStreams($streams);
                            error_log('Finished update stream config');
                        }
                    ]
                ]),
            )
        ]);
    }

    /**
     * @param Stream[] $streams
     * @return void
     */
    private function restartFFStreams(array $streams): void
    {
        $this->stopFFStreams();
        $this->runFFStreams($streams);
    }

    /**
     * @param Stream[] $streams
     * @return void
     */
    private function runFFStreams(array $streams): void
    {
        foreach ($streams as $stream) {
            $feedUrl = $this->ffserver . '/' . $stream->getName();
            $ffmpegProcess = new Process(
                [
                    "ffmpeg",
                    "-hide_banner",
                    "-loglevel",
                    "warning",
                    "-rtsp_transport",
                    "tcp",
                    "-i",
                    $stream->getUrl(),
                    $feedUrl
                ]
            );
            error_log('Starting stream: ' . $stream->getId());
            $this->streamProcesses[] = $ffmpegProcess;
            $ffmpegProcess->start();
        }
    }

    private function stopFFStreams(): void
    {
        foreach ($this->streamProcesses as $process) {
            $process->stop();
        }
        $this->streamProcesses = [];
    }


    private function restartFFServer(array $streams): void
    {
        $this->stopFFServer($streams);
        $this->startFFServer($streams);
    }

    private function startFFServer(array $streams): void
    {
        $this->configService->createFFServerConfig($streams);
        $this->ffServerProcess = new Process(["ffserver","-hide_banner","-loglevel","warning"]);
        $this->ffServerProcess->start();
    }

    private function stopFFServer(array $streams): void
    {
        $this->ffServerProcess->stop();
    }

}
