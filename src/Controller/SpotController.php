<?php

namespace Parking\Controller;

use Parking\Service\ParkingService;
use Parking\Service\SpotService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SpotController extends AbstractController
{
    public function __construct(private SpotService $spotService, private ParkingService $parkingService)
    {
    }

    #[Route('/api/spots/{id}', name: 'spots_update', options: ['expose' => true], methods: ['POST'])]
    public function saveSpots(Request $request, string $id): Response
    {
        $spots = $this->spotService->deserializeSpotsFromJson($request->getContent());
        $this->parkingService->updateSpots($id, $spots);
        return new JsonResponse(['status' => 'ok']);
    }

    #[Route('/api/spots/{id}', name: 'spots_list', options: ['expose' => true], methods: ['GET'])]
    public function getSpots(): Response
    {
        return new JsonResponse(array_map(fn($spot) => $spot->toArray(), $this->spotService->getSpots()));
    }
}
