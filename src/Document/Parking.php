<?php

namespace Parking\Document;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;
use Parking\Model\Spot;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ODM\Document]
class Parking
{

    #[ODM\Id]
    private string $id;
    #[ODM\EmbedMany(targetDocument: Spot::class)]
    /**
     * @return ArrayCollection|Spot[]
     */
    private ArrayCollection $spots;

    public function __construct(
        #[ODM\Field(type: 'string')]
        #[Assert\NotBlank(message: 'Name is required')]
        #[Groups('create')]
        private string $name,
        #[ODM\Field(type: 'string')]
        #[Assert\NotBlank(message: 'Stream url is required')]
        #[Assert\Url(message: 'Stream url is not valid', protocols: ['rtsp', 'rtmp', 'http', 'https'])]
        #[Groups('create')]
        private string $stream
    ) {
        $this->spots = new ArrayCollection();
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getStream(): string
    {
        return $this->stream;
    }

    /**
     * @param Spot[] $spots
     * @return void
     */
    public function setSpots(array $spots): void
    {
        $this->spots = new ArrayCollection($spots);
    }

    /**
     * @return ArrayCollection|Spot[]
     */
    public function getSpots(): ArrayCollection
    {
        return $this->spots;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name ?? $this->getId();
    }
}
