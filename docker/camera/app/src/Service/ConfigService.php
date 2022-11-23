<?php

namespace Camera\Service;

use Camera\Config;
use Camera\Stream;

class ConfigService
{
    public function __construct(
        private int $ffServerPort,
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
        $config = new Config(streams: $streams, port: $this->ffServerPort);
        $this->saveFFServerConfig($config);
    }

    /**
     * @return Stream[]
     * @throws \Exception
     */
    public function getStreams(): array
    {

        $streamBody = @file_get_contents($this->streamApi);
        if(!empty($streamBody)) {
            $streamConfig = json_decode($streamBody, true);
        } else {
            throw new \Exception('Could not get stream config from API');
        }
        return array_map(function ($streamData) {
            return new Stream($streamData['id'], $streamData['url']);
        }, $streamConfig);
    }


    private function saveFFServerConfig(Config $config): void
    {
        file_put_contents($this->ffServerFile, $config->getConfigContent());
    }
}
