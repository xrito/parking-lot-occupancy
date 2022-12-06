<?php

namespace Parking\Controller;

use Nelmio\ApiDocBundle\Annotation\Model;
use Parking\Model\Spot;
use Parking\Service\ParkingService;
use Parking\Service\SpotService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use OpenApi\Attributes as OA;

class SpotController extends AbstractController
{
    public function __construct(
        private readonly SpotService $spotService,
        private readonly ParkingService $parkingService)
    {
    }

    /**
     * Updates spots for a parking
     */
    #[Route('/api/spots/{id}', name: 'spots_update', options: ['expose' => true], methods: ['POST'])]
    #[OA\Parameter(
        name: 'id',
        description: 'ID of parking',
        in: 'path',
        schema: new OA\Schema(type: 'string')
    )]
    #[OA\Post(requestBody: new OA\RequestBody(
        content: new OA\JsonContent(
            ref: new Model(
                type: Spot::class,
                groups: ['create'],
            ),
        )
    ))]
    #[OA\Tag(name: 'spot')]
    public function saveSpots(Request $request, string $id): Response
    {
        $spots = $this->spotService->deserializeSpotsFromJson($request->getContent());
        $this->parkingService->updateSpots($id, $spots);
        return new JsonResponse(['status' => 'ok']);
    }
}
