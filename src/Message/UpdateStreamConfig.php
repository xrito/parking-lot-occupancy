<?php

namespace Parking\Message;

class UpdateStreamConfig
{
    public function __construct(private string $streamName)
    {
    }

    /**
     * @return string
     */
    public function getStreamName(): string
    {
        return $this->streamName;
    }
}
