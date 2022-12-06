<?php

namespace Parking\Factory;

use Parking\Document\Parking;
use Parking\Model\ParkingPreview;
use Parking\Service\CameraService;

class ParkingPreviewFactory
{
    public function __construct(private CameraService $cameraService)
    {
    }

    /**
     * @param Parking $parking
     * @param bool $detail
     * @return ParkingPreview
     */
    public function createFromParking(Parking $parking, bool $detail = false): ParkingPreview
    {
        return new ParkingPreview(
            $parking->getId(),
            $parking->getName(),
            $this->cameraService->getPreviewUrl($parking->getId()),
            $this->cameraService->getStreamUrl($parking->getId()),
            $detail ? $parking->getSpots()->toArray() : []
        );
    }
}
