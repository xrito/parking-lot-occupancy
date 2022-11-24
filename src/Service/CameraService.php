<?php

namespace Parking\Service;

use Imagick;
use Parking\Streaming\ConnectionStatusExtractor;

class CameraService
{
    public function __construct(
        private string $snapshotApi,
        private string $snapshotDest,
        private string $entrypoint = '/stream')
    {
    }

    public function isAvailableStream(string $id): bool
    {
        $statusHtml = file_get_contents($this->snapshotApi . '/status.html');
        $connections = (new ConnectionStatusExtractor($statusHtml))->extract();
        foreach ($connections as $connection) {
            if ($connection->isStream() && $connection->getStreamId() === $id) {
                return true;
            }
        }
        return false;
    }


    public function getPreviewUrl(string $streamId): string
    {
        return $this->entrypoint . '/' . $streamId . '-still.jpg';
    }

    public function getStreamUrl(string $streamId): string
    {
        return $this->entrypoint . '/' . $streamId . '-live.mjpg';
    }


    public function makeSnapshot(string $streamId): void
    {
        $image = file_get_contents($this->snapshotApi . '/' . $streamId . '-still.jpg');
        file_put_contents($this->snapshotDest, $image);
    }

    public function getCameraDimension(): int
    {
        $image = getimagesize($this->snapshotDest);
        return $image[0];
    }

}
