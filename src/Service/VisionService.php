<?php

namespace Parking\Service;

use GuzzleHttp\Client;
use GuzzleHttp\Promise\PromiseInterface;
use Parking\Model\DetectionResponse;
use Parking\Model\Prediction;
use Psr\Http\Message\ResponseInterface;
use SplFileObject;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Mime\Part\DataPart;
use Symfony\Component\Mime\Part\Multipart\FormDataPart;
use Symfony\Component\Serializer\SerializerInterface;

class VisionService
{
    private float $minConfidence = 0.05;
    private Client $client;

    public function __construct(
        private string $visionApi,
        private SerializerInterface $serializer)
    {
        $this->client = new Client();
    }

    public function clearDNSCache(): void
    {
        $this->client = new Client();
    }

    /**
     * @param string $imageFilePath
     * @return Prediction[]
     */
    public function detectCars(string $imageFilePath): array
    {
        $predictions = $this->detect($imageFilePath);
        return $this->filterPredictionsByCar($predictions);
    }

    /**
     * @param resource $snapshot
     * @return PromiseInterface
     */
    public function detectCarsAsync($snapshot): PromiseInterface
    {
        return $this->detectAsync($snapshot)->then($this->filterPredictionsByCar(...));
    }

    /**
     * @param Prediction[] $predictions
     * @return Prediction[]
     */
    private function filterPredictionsByCar(array $predictions): array
    {
        return array_values(
            array_filter(
                $predictions,
                fn(Prediction $prediction) => $prediction->isCar()
            )
        );
    }

    /**
     * @param resource $snapshot
     * @return PromiseInterface
     */
    public function detectAsync($snapshot): PromiseInterface
    {
        $promise = $this->client->postAsync($this->visionApi, [
            'multipart' => [
                [
                    'name' => 'min_confidence',
                    'contents' => $this->minConfidence . '',
                ],
                [
                    'name' => 'image',
                    'contents' => $snapshot,
                ],
            ],
        ]);
        return $promise->then(
            function (ResponseInterface $response): array {
                /** @var DetectionResponse $detectionResponse */
                $detectionResponse = $this->serializer->deserialize(
                    $response->getBody()->getContents(),
                    DetectionResponse::class,
                    'json'
                );
                return $detectionResponse->predictions;
            },
            function ($exception) {
                return [];
            }
        );
    }


    /**
     * @param string $imageFilePath
     * @return Prediction[]
     */
    public function detect(string $imageFilePath): array
    {
        $client = HttpClient::create();
        $formFields = [
            'min_confidence' => $this->minConfidence . '',
            'image' => DataPart::fromPath($imageFilePath),
        ];
        $formData = new FormDataPart($formFields);
        $response = $client->request('POST', $this->visionApi, [
            'headers' => $formData->getPreparedHeaders()->toArray(),
            'body' => $formData->bodyToIterable(),
        ]);
        $detectionResponse = $this->serializer->deserialize($response->getContent(), DetectionResponse::class, 'json');
        return $detectionResponse->predictions;
    }
}
