<?php

namespace Camera\Service;

use Camera\Config;
use Camera\Stream;

class ConfigService
{
    public function __construct(
        private string $streamFile = '/tmp/streams.json',
        private string $ffServerFile = '/etc/ffserver.conf')
    {
    }

    /**
     * @param Stream[] $streams
     * @return void
     */
    public function saveStreams(array $streams): void
    {
        file_put_contents($this->streamFile, json_encode($streams));
    }

    public function getConfigTimeModified(): int
    {
        clearstatcache();
        return filemtime($this->streamFile);
    }

    public function createFFServerConfig():void{
        $streams = $this->getStreams();
        $config = new Config($streams);
        $this->saveFFServerConfig($config);
    }

    /**
     * @return Stream[]
     */
    public function getStreams(): array
    {
        $streamConfig = json_decode(file_get_contents($this->streamFile), true);
        return array_map(function ($streamData) {
            return new Stream($streamData['id'], $streamData['url']);
        }, $streamConfig);
    }


    private function saveFFServerConfig(Config $config): void
    {
        file_put_contents($this->ffServerFile, $config->getConfigContent());
    }
}
