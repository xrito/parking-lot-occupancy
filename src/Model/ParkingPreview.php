<?php

namespace Parking\Model;

use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes\Property;
use Symfony\Component\Serializer\Annotation\Groups;
use OpenApi\Attributes as OA;

class ParkingPreview
{
    /**
     * @param string $id
     * @param string $name
     * @param string $preview
     * @param string $stream
     * @param Spot[] $spots
     */
    public function __construct(
        #[Groups(['list','detail'])]
        public readonly string $id,
        #[Groups(['list','detail'])]
        public readonly string $name,
        #[Groups(['list','detail'])]
        public readonly string $preview,
        #[Groups(['list','detail'])]
        public readonly string $stream,
        #[Groups(['detail'])]
        #[Property(type: 'array', items: new OA\Items(ref: new Model(type: Spot::class, groups: ['detail'])))]
        public readonly array $spots = [],
    ) {
    }

}
