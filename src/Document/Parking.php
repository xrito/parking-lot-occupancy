<?php
namespace Parking\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;

#[ODM\Document]
class Parking{

    #[ODM\Id]
    private string $id;

    public function __construct(
        #[ODM\Field(type: 'string')]
        private string $stream,
    )
    {
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getStream(): string
    {
        return $this->stream;
    }
}
