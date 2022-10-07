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
        return $this->serializer->deserialize($inlineSpots, Spot::class . '[]', 'json');
    }

}
