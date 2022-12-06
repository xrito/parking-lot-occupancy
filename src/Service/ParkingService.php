<?php

namespace Parking\Service;

use Doctrine\ODM\MongoDB\DocumentManager;
use GuzzleHttp\Promise\PromiseInterface;
use Parking\Document\Parking;
use Parking\Factory\ParkingPreviewFactory;
use Parking\Message\UpdateStreamConfig;
use Parking\Model\ParkingPreview;
use Parking\Model\Prediction;
use Parking\Model\Spot;
use Symfony\Component\Messenger\MessageBusInterface;

class ParkingService
{
    public function __construct(
        private VisionService $visionService,
        private CameraService $cameraService,
        private ParkingPreviewFactory $parkingPreviewFactory,
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
        return array_map($this->parkingPreviewFactory->createFromParking(...), $parkingList);
    }

    public function getParking(string $id): ?ParkingPreview
    {
        $parking = $this->documentManager->getRepository(Parking::class)->find($id);
        if ($parking === null) {
            return null;
        }
        return $this->parkingPreviewFactory->createFromParking($parking, true);
    }


    /**
     * @param Parking $parking
     * @return ParkingPreview
     */
    public function createParkingPreview(Parking $parking): ParkingPreview
    {
        return new ParkingPreview( $parking->getId(),
          $parking->getName(),
          $this->cameraService->getPreviewUrl($parking->getId()),
          $this->cameraService->getStreamUrl($parking->getId()));
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

    public function addParking(Parking $parking): string
    {
        $this->documentManager->persist($parking);
        $this->documentManager->flush();
        $this->bus->dispatch(new UpdateStreamConfig($parking->getId()));
        return $parking->getId();
    }

    /**
     * @param string $streamId
     * @return int[]
     */
    public function getFreeSpotsById(string $streamId): array
    {
        $carPredictions = $this->getCarPredictions($streamId);
        return $this->getFreeSpotsByPredictions($streamId, $carPredictions);
    }

    /**
     * @param Prediction[] $carPredictions
     * @return int[]
     */
    public function getFreeSpotsByPredictions(string $streamId, array $carPredictions): array
    {
        $spotAvailability = $this->getSpotAvailability($streamId, $carPredictions);
        $freeSpotNumbers = array_keys(array_filter($spotAvailability, fn(bool $isAvailable) => $isAvailable));
        return array_map(fn($spot) => $spot + 1, $freeSpotNumbers);
    }

    public function getCarPredictionsAsync(string $streamId): PromiseInterface
    {
        $snapshot = $this->cameraService->getSnapshot($streamId );
        return $this->visionService->detectCarsAsync($snapshot);
    }

    /**
     * @return Prediction[]
     */
    public function getCarPredictions(string $streamId): array
    {
        $this->cameraService->makeSnapshot($streamId);
        $cameraDimension = $this->cameraService->getCameraDimension();
        $spotDimension = $this->spotService->getSpotDimension();
        $predictionDimension = $spotDimension / $cameraDimension;
        $carPredictions = array_values($this->visionService->detectCars($this->snapshotSrc));
        array_map(fn(Prediction $prediction) => $prediction->normalize($predictionDimension), $carPredictions);
        return $carPredictions;
    }

    public function drawSpotPredictions(string $parkingId): void
    {
        $carPredictions = $this->visionService->detectCars($this->snapshotSrc);
        //$this->drawService->drawPredictions($this->snapshotSrc, $this->snapshotDest, $carPredictions);
        $this->drawService->drawSpots($this->snapshotSrc, $this->snapshotDest, $this->spotService->getSpots($parkingId));
    }



    /**
     * @param array $predictions
     * @return bool[]
     */
    private function getSpotAvailability(string $parkingId, array $predictions): array
    {
        $spots = $this->spotService->getSpots($parkingId);
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
