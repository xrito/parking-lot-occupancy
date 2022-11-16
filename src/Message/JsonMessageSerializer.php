<?php

namespace Parking\Message;

use Symfony\Component\Messenger\Envelope;
use Symfony\Component\Messenger\Transport\Serialization\SerializerInterface;

class JsonMessageSerializer implements SerializerInterface
{

    public function decode(array $encodedEnvelope): Envelope
    {
        throw new \Exception('Transport & serializer not meant for received messages');
    }

    public function encode(Envelope $envelope): array
    {
        $message = $envelope->getMessage();
        if ($message instanceof UpdateStreamConfig) {
            $type = 'config.stream.update';
        } else {
            throw new \Exception('Unsupported message class');
        }
        $allStamps = [];
        foreach ($envelope->all() as $stamps) {
            $allStamps = array_merge($allStamps, $stamps);
        }
        return [
            'body' => json_encode('', true),
            'headers' => [
                'stamps' => serialize($allStamps),
                'type' => $type,
            ],
        ];
    }
}
