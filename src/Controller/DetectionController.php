<?php

namespace Parking\Controller;

use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DetectionController extends AbstractController
{
    public function __construct(private ParkingService $parkingService)
    {
    }

    #[Route('/api/detection/spots/{id}', name: 'detection_spots', options: ['expose' => true], methods: ['GET'])]
    public function getSpots(string $id): Response
    {
        return new JsonResponse($this->parkingService->getFreeSpotsById($id));
    }

    #[Route('/api/detection/predictions/{id}', name: 'detection_predictions', options: ['expose' => true], methods: ['GET'])]
    public function getPredictions(string $id): Response
    {
        return new JsonResponse($this->parkingService->getCarPredictions($id));
    }
}
