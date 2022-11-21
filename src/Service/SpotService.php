<?php

namespace Parking\Service;

use Parking\Model\Spot;
use Symfony\Component\Serializer\SerializerInterface;

class SpotService
{
    public function __construct(
        private string $spotFilePath,
        private SerializerInterface $serializer)
    {
    }

    /**
     * @return Spot[]
     */
    public function getSpots(): array
    {
        $inlineSpots = file_get_contents($this->spotFilePath);
        return $this->deserializeSpotsFromJson($inlineSpots);
    }

    public function getSpotDimension(): int
    {
        return 640;
    }

    /**
     * @param string $id
     * @param Spot $spots
     * @return void
     */
    public function saveSpots(string $id, array $spots): void
    {
        $inlineSpots = json_encode(array_map(fn(Spot $spot) => $spot->toArray(), $spots));
        file_put_contents($this->spotFilePath, $inlineSpots);
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
