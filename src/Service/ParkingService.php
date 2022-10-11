<?php

namespace Parking\Service;

use Parking\Model\Prediction;

class ParkingService
{
    public function __construct(
        private VisionService $visionService,
        private CameraService $cameraService,
        private DrawService $drawService,
        private SpotService $spotService,
        private string $snapshotSrc,
        private string $snapshotDest)
    {
    }

    public function getFreeSpots(): array
    {
        $this->cameraService->makeSnapshot();
        $carPredictions = $this->visionService->detectCars($this->snapshotSrc);
        $cameraDimension = $this->cameraService->getCameraDimension();
        $spotDimension = $this->spotService->getSpotDimension();
        $predictionDimension = $spotDimension/$cameraDimension;
        array_map(fn(Prediction $prediction) => $prediction->normalize($predictionDimension), $carPredictions);
        $spotAvailability = $this->getSpotAvailability($carPredictions);
        $freeSpotNumbers = array_keys(array_filter($spotAvailability, fn(bool $isAvailable) => $isAvailable));
        return array_map(fn($spot) => $spot + 1, $freeSpotNumbers);
    }

    public function drawSpotPredictions(): void
    {
        $carPredictions = $this->visionService->detectCars($this->snapshotSrc);
        //$this->drawService->drawPredictions($this->snapshotSrc, $this->snapshotDest, $carPredictions);
        $this->drawService->drawSpots($this->snapshotSrc, $this->snapshotDest, $this->spotService->getSpots());
    }

    /**
     * @return Prediction[]
     */
    public function getCarPredictionAndSpot(): array
    {
        $this->cameraService->makeSnapshot();
        $cameraDimension = $this->cameraService->getCameraDimension();
        $spotDimension = $this->spotService->getSpotDimension();
        $predictionDimension = $spotDimension/$cameraDimension;
        $predictions = array_values($this->visionService->detectCars($this->snapshotSrc));
        array_map(fn(Prediction $prediction) => $prediction->normalize($predictionDimension), $predictions);
        $spotAvailability = $this->getSpotAvailability($predictions);
        $freeSpotNumbers = array_keys(array_filter($spotAvailability, fn(bool $isAvailable) => $isAvailable));
        return $predictions;
    }



    /**
     * @param array $predictions
     * @return bool[]
     */
    private function getSpotAvailability(array $predictions): array
    {
        $spots = $this->spotService->getSpots();
        $usedSpaces = [];
        foreach ($spots as $ind => $spot) {
            foreach ($predictions as $prediction) {
                if (!$spot->isFree($prediction)) {
                    $usedSpace = $spot->getUsedSpace($prediction);
                    if (!isset($usedSpaces[$ind]) || $usedSpaces[$ind] < $usedSpace) {
                        $usedSpaces[$ind] = $usedSpace;
                    }
                }
            }
        }

        return array_map(fn($ind) => !(isset($usedSpaces[$ind]) && $usedSpaces[$ind] > 0.5),
            array_keys($spots));
    }


}
