<?php

namespace Parking\Service;

use Doctrine\ODM\MongoDB\DocumentManager;
use Parking\Document\Parking;
use Parking\Model\Spot;
use Symfony\Component\Serializer\SerializerInterface;

class SpotService
{
    public function __construct(
        private DocumentManager $documentManager,
        private SerializerInterface $serializer)
    {
    }

    /**
     * @return Spot[]
     */
    public function getSpots(string $parkingId): array
    {
        $parking = $this->documentManager->getRepository(Parking::class)->find($parkingId);
        if ($parking === null) {
            return [];
        }
        return $parking->getSpots()->toArray();
    }

    public function getSpotDimension(): int
    {
        return 640;
    }
    /**
     * @param string $json
     * @return Spot[]
     */
    public function deserializeSpotsFromJson(string $json): array
    {
        return $this->serializer->deserialize($json, Spot::class . '[]', 'json');
    }

}
