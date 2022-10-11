<?php

namespace Parking\Controller;

use Parking\Model\AlisaRequest;
use Parking\Model\AlisaResponse;
use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class ParkingController extends AbstractController
{
    public function __construct(private ParkingService $parkingService, private Environment $twig)
    {
    }

    #[Route('/parking', name: 'parking')]
    public function index(Request $request): AlisaResponse
    {
        try {
            $alisaRequest = AlisaRequest::createFromRequest($request);
        }catch (\Exception $e){
            return new AlisaResponse($e->getMessage());
        }
        return new AlisaResponse(
            "Свободные место под номером: " .  implode(", ", $this->parkingService->getFreeSpots())
        );
    }

    #[Route('/admin', name: 'admin')]
    public function admin(Request $request): Response
    {
        return new Response($this->twig->render('admin.html.twig'));
    }
}
