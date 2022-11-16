<?php

namespace Camera;

final class Config
{

    /**
     * @param Stream[] $streams
     */
    public function __construct(
        private array $streams,
        private int $port = 8090,
        private string $address = '0.0.0.0',
        private string $feedPath = '/tmp',
        private string $size = '640x360',
        private string $snapshotStreamPostfix = 'still.jpg',
        private string $videoStreamPostfix = 'live.mjpg',
        private string $snapshotFormat = 'jpeg',
        private string $videoFormat = 'mpjpeg')
    {
    }


    public function getConfigContent(): string
    {
        $contentParts = [$this->getHeader()];
        foreach ($this->streams as $stream) {
            $contentParts[] = $this->getFeed($stream);
            $contentParts[] = $this->getVideoStream($stream);
            $contentParts[] = $this->getSnapshotStream($stream);
        }
        return implode(PHP_EOL, $contentParts);
    }

    private function getHeader(): string
    {
        return "HTTPPort $this->port
                HTTPBindAddress $this->address
                MaxHTTPConnections 2000
                MaxClients 1000
                MaxBandwidth 10000";
    }

    private function getFeed(Stream $stream): string
    {

        return sprintf(
            "<Feed %s>
                File %s/%s                
                FileMaxSize 50M
                </Feed>",
            $stream->getName(),
            $this->feedPath,
            $stream->getName()
        );
    }

    private function getSnapshotStream(Stream $stream): string
    {
        return $this->getStream($stream, $this->snapshotFormat, $this->snapshotStreamPostfix);
    }

    private function getVideoStream(Stream $stream): string
    {
        return $this->getStream($stream, $this->videoFormat, $this->videoStreamPostfix);
    }

    private function getStream(Stream $stream, string $format, string $name): string
    {

        return sprintf(
            "<Stream %s-%s>
                Feed %s
                Format %s
                VideoFrameRate 2
                VideoSize %s                
                VideoQMin 1
                VideoQMax 15
                VideoIntraOnly
                NoAudio
                Strict -1
                NoDefaults
                </Stream>",
            $stream->getId(),
            $name,
            $stream->getName(),
            $format,
            $this->size
        );
    }
}