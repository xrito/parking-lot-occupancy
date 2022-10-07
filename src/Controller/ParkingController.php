<?php

namespace Parking\Controller;

use Parking\Model\AlisaRequest;
use Parking\Model\AlisaResponse;
use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ParkingController extends AbstractController
{
    public function __construct(private ParkingService $parkingService)
    {
    }

    #[Route('/parking', name: 'parking')]
    public function index(Request $request): AlisaResponse
    {
        $alisaRequest = AlisaRequest::createFromRequest($request);
        return new AlisaResponse(
            "Свободные место под номером: " .  implode(", ", $this->parkingService->getSpotAvailable())
        );
    }
}
