<?php

namespace Camera\Service;

use Camera\Config;
use Camera\Stream;

class ConfigService
{
    public function __construct(
        private string $streamApi = 'http://frontend/api/streams',
        private string $ffServerFile = '/etc/ffserver.conf')
    {
    }

    /**
     * @param Stream[] $streams
     * @return void
     */
    public function createFFServerConfig(array $streams): void
    {
        $config = new Config($streams);
        $this->saveFFServerConfig($config);
    }

    /**
     * @return Stream[]
     */
    public function getStreams(): array
    {
        $streamConfig = json_decode(file_get_contents($this->streamApi), true);
        return array_map(function ($streamData) {
            return new Stream($streamData['id'], $streamData['url']);
        }, $streamConfig);
    }


    private function saveFFServerConfig(Config $config): void
    {
        file_put_contents($this->ffServerFile, $config->getConfigContent());
    }
}
