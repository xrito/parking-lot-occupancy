<?php

namespace Parking\Service;

class CameraService
{
    public function __construct(private string $snapshotApi, private string $snapshotDest)
    {
    }

    public function makeSnapshot(): void
    {
        $image = file_get_contents($this->snapshotApi);
        file_put_contents($this->snapshotDest, $image);
    }

    public function getCameraDimension(): int
    {
        $image = getimagesize($this->snapshotDest);
        return $image[0];
    }
}
