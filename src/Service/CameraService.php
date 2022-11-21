<?php

namespace Parking\Service;

class CameraService
{
    public function __construct(private string $snapshotApi, private string $snapshotDest)
    {
    }

    public function getPreviewUrl(string $streamId): string
    {
        return '/stream/' . $streamId . '-still.jpg';
    }

    public function getStreamUrl(string $streamId): string
    {
        return '/stream/' . $streamId . '-live.mjpg';
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
