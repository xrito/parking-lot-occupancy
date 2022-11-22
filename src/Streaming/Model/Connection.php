<?php

namespace Parking\Streaming\Model;

class Connection
{
    private string $streamPostfix = '-feed.ffm(input)';
    public function __construct(
        private string $file,
        private string $ip,
        private string $proto,
        private string $state,
        private string $targetBits,
        private string $ActualBits,
        private string $bytesTransferred)
    {
    }

    public function isStream(): bool
    {
        return str_ends_with($this->file, $this->streamPostfix);
    }

    public function getStreamId(): string
    {
        return str_replace($this->streamPostfix, '', $this->file);
    }
    /**
     * @return string
     */
    public function getFile(): string
    {
        return $this->file;
    }

    /**
     * @return string
     */
    public function getIp(): string
    {
        return $this->ip;
    }

    /**
     * @return string
     */
    public function getProto(): string
    {
        return $this->proto;
    }

    /**
     * @return string
     */
    public function getState(): string
    {
        return $this->state;
    }

    /**
     * @return string
     */
    public function getTargetBits(): string
    {
        return $this->targetBits;
    }

    /**
     * @return string
     */
    public function getActualBits(): string
    {
        return $this->ActualBits;
    }

    /**
     * @return string
     */
    public function getBytesTransferred(): string
    {
        return $this->bytesTransferred;
    }


}
