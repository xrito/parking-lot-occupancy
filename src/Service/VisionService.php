<?php

namespace Parking\Service;

use Parking\Model\DetectionResponse;
use Parking\Model\Prediction;
use Symfony\Component\HttpClient\CurlHttpClient;
use Symfony\Component\Mime\Part\DataPart;
use Symfony\Component\Mime\Part\Multipart\FormDataPart;
use Symfony\Component\Serializer\SerializerInterface;

class VisionService
{
    public function __construct(
        private string $visionApi,
        private SerializerInterface $serializer)
    {
    }

    /**
     * @param string $imageFilePath
     * @return Prediction[]
     */
    public function detectCars(string $imageFilePath): array
    {
        $predictions = $this->detect($imageFilePath);
        return array_filter($predictions, fn(Prediction $prediction) => $prediction->isCar());
    }

    /**
     * @param string $imageFilePath
     * @return Prediction[]
     */
    public function detect(string $imageFilePath): array
    {
        $client = new CurlHttpClient();
        $formFields = [
            'min_confidence' => '0',
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
