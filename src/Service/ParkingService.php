<?php

namespace Parking\Service;

use Doctrine\ODM\MongoDB\DocumentManager;
use Parking\Document\Parking;
use Parking\Message\UpdateStreamConfig;
use Parking\Model\Prediction;
use Parking\Model\Spot;
use Symfony\Component\Messenger\MessageBusInterface;

class ParkingService
{
    public function __construct(
        private VisionService $visionService,
        private CameraService $cameraService,
        private DrawService $drawService,
        private SpotService $spotService,
        private DocumentManager $documentManager,
        private MessageBusInterface $bus,
        private string $snapshotSrc,
        private string $snapshotDest)
    {
    }

    public function getParkingPreviews(): array
    {
        $parkingList = $this->documentManager->getRepository(Parking::class)->findAll();
        return array_map(fn(Parking $parking) => $this->createParkingPreview($parking->getId()), $parkingList);
    }

    public function getParking(string $id): ?array
    {
        $parking = $this->documentManager->getRepository(Parking::class)->find($id);
        if ($parking === null) {
            return null;
        }
        return array_merge(
            $this->createParkingPreview($id),
            ['spots' => $parking->getSpots()->toArray()]);
    }


    public function createParkingPreview(string $id): array
    {
        return [
            "id" => $id,
            "preview" => $this->cameraService->getPreviewUrl($id),
            'stream' => $this->cameraService->getStreamUrl($id),
        ];
    }

    public function removeParking(string $id): void
    {
        $parking = $this->documentManager->getRepository(Parking::class)->find($id);
        if ($parking) {
            $this->documentManager->remove($parking);
            $this->documentManager->flush();
            $this->bus->dispatch(new UpdateStreamConfig($id));
        }
    }

    /**
     * @param string $id
     * @param Spot[] $spots
     * @return void
     */
    public function updateSpots(string $id, array $spots): void
    {
        /** @var Parking $parking */
        $parking = $this->documentManager->getRepository(Parking::class)->find($id);
        if ($parking === null) {
            return;
        }
        $parking->setSpots($spots);
        $this->documentManager->persist($parking);
        $this->documentManager->flush();
    }

    public function addParking(string $stream): string
    {
        $parking = new Parking($stream);
        $this->documentManager->persist($parking);
        $this->documentManager->flush();
        $this->bus->dispatch(new UpdateStreamConfig($parking->getId()));
        return $parking->getId();
    }

    public function getFreeSpots(string $streamId): array
    {
        $this->cameraService->makeSnapshot($streamId);
        $carPredictions = $this->visionService->detectCars($this->snapshotSrc);
        $cameraDimension = $this->cameraService->getCameraDimension();
        $spotDimension = $this->spotService->getSpotDimension();
        $predictionDimension = $spotDimension / $cameraDimension;
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
    public function getCarPredictionAndSpot(string $streamId): array
    {
        $this->cameraService->makeSnapshot($streamId);
        $cameraDimension = $this->cameraService->getCameraDimension();
        $spotDimension = $this->spotService->getSpotDimension();
        $predictionDimension = $spotDimension / $cameraDimension;
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
