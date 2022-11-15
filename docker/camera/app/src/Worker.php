<?php

namespace Camera;

use Camera\Service\ConfigService;

final class Worker
{

    public function __construct(
        private ConfigService $configService,
        private int $configTtl = 1,
        private int $configTimeChanged = 0,
        private array $streamPIDs = [],
        private string $ffserver = 'http://127.0.0.1:8090')
    {
    }

    public function run(): void
    {
        $this->configService->createFFServerConfig();
        $this->runConfigWatcher();
    }

    private function runConfigWatcher(): void
    {
        while (true) {
            if ($this->configChanged()) {
                $this->restartFFStreams();
                $this->restartFFServer();
            }
            sleep($this->configTtl);
        }
    }

    private function restartFFStreams(): void
    {
        $this->stopFFStreams();
        $this->runFFStreams();
    }

    private function runFFStreams(): void
    {
        $streams = $this->configService->getStreams();
        foreach ($streams as $stream) {
            $feedUrl = $this->ffserver . '/' . $stream->getName();
            $ffmpegCommand = sprintf(
                "ffmpeg -hide_banner -loglevel warning -rtsp_transport tcp -i %s %s",
                $stream->getUrl(),
                $feedUrl
            );
            $command = 'nohup ' . $ffmpegCommand . ' > /dev/null 2>&1 & echo $!';
            $output = [];
            exec($command, $output);
            $this->streamPIDs[] = (int)$output[0];
        }
        print_r($this->streamPIDs);
    }


    private function stopFFStreams(): void
    {
        foreach ($this->streamPIDs as $pid) {
            exec("kill -9 $pid");
        }
        $this->streamPIDs = [];
    }

    private function restartFFServer(): void
    {
        exec('supervisorctl restart ffserver');
    }

    private function configChanged(): bool
    {
        $time = $this->configService->getConfigTimeModified();
        if ($time > $this->configTimeChanged) {
            $this->configTimeChanged = $time;
            return true;
        }
        return false;
    }
}
