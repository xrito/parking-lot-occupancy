<?php

namespace Parking\Model;

use Symfony\Component\HttpFoundation\JsonResponse;

class AlisaResponse extends JsonResponse
{
    public function __construct(?string $content = '', int $status = 200, array $headers = [])
    {
        parent::__construct([
            'response' => [
                "text" => $content,
            ],
            "version" => "1.0"
        ], $status, $headers);
    }
}
