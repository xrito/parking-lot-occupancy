<?php

namespace Parking\Controller;

use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
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

    #[Route('/api/detection/spots/{id}/stream', name: 'detection_spots_stream', options: ['expose' => true], methods: ['GET'])]
    public function getStreamedSpots(string $id)
    {
        $response = new StreamedResponse(function () use ($id) {
            foreach ([0, 1] as $i) {
                echo json_encode(['test'=> $i]);
                @ob_flush();
                flush();
                sleep(1);
            }
        });
        $response->headers->set('Content-Type', 'text/event-stream');
        return $response;
    }

    #[Route('/api/detection/predictions/{id}', name: 'detection_predictions', options: ['expose' => true], methods: ['GET'])]
    public function getPredictions(string $id): Response
    {
        return new JsonResponse($this->parkingService->getCarPredictions($id));
    }
}
