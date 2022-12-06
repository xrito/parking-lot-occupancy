<?php

namespace Parking\Controller;

use Nelmio\ApiDocBundle\Annotation\Model;
use Parking\Model\Prediction;
use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use OpenApi\Attributes as OA;

class DetectionController extends AbstractController
{
    public function __construct(private ParkingService $parkingService)
    {
    }

    /**
     * Returns the list of numbers available free spots for a parking
     *
     */
    #[Route('/api/detection/spots/{id}', name: 'detection_spots', options: ['expose' => true], methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: 'Successful response',
        content: new OA\JsonContent(
            type: 'array',
            items: new OA\Items(type: 'integer'), example: [1, 2]
        )
    )]
    #[OA\Parameter(
        name: 'id',
        description: 'ID of parking',
        in: 'path',
        schema: new OA\Schema(type: 'string')
    )]
    #[OA\Tag(name: 'detection')]
    public function getSpots(string $id): Response
    {
        return new JsonResponse($this->parkingService->getFreeSpotsById($id));
    }

    /**
     * Returns the list of car predictions for a parking
     */
    #[Route('/api/detection/predictions/{id}', name: 'detection_predictions', options: ['expose' => true], methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: 'Successful response',
        content: new OA\JsonContent(
            type: 'array',
            items: new OA\Items(ref: new Model(type: Prediction::class)))
    )]
    #[OA\Parameter(
        name: 'id',
        description: 'ID of parking',
        in: 'path',
        schema: new OA\Schema(type: 'string')
    )]
    #[OA\Tag(name: 'detection')]
    public function getPredictions(string $id): Response
    {
        return new JsonResponse($this->parkingService->getCarPredictions($id));
    }
}
