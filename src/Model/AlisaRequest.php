<?php

namespace Parking\Model;


use Symfony\Component\HttpFoundation\Request;

class AlisaRequest{

    private function __construct(private array $data)
    {
    }

    public static function createFromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true);
        return new self($data);
    }

    public function getTokens(): array
    {
        return $this->data['request']['nlu']['tokens'];
    }
}
