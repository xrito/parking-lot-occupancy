<?php
namespace Camera;

use Camera\Service\ConfigService;

class Server
{
    public function __construct(private ConfigService $configService)
    {
    }

    public function run(): void
    {
        $request = json_decode(file_get_contents('php://input'), true);
        if(empty($request)) {
            header('HTTP/1.1 400 Bad Request');
            echo 'No streams provided';
            return;
        }
        $streams = $this->createStreamsFromRequest($request);
        $this->configService->saveStreams($streams);
        echo 'OK';
    }

    /**
     * @param array $streamsRequest
     * @return Stream[]
     */
    private function createStreamsFromRequest(array $streamsRequest): array
    {
        return array_map(function ($streamData) {
            return new Stream($streamData['id'], $streamData['url']);
        }, $streamsRequest);
    }

}
