<?php

namespace Parking\Controller;

use Parking\Model\AlisaRequest;
use Parking\Model\AlisaResponse;
use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Twig\Environment;

class ParkingController extends AbstractController
{
    public function __construct(
        private ParkingService $parkingService,
        private ValidatorInterface $validator,
        private Environment $twig)
    {
    }

    #[Route('/parking', name: 'parking')]
    public function index(Request $request): AlisaResponse
    {
        try {
            $alisaRequest = AlisaRequest::createFromRequest($request);
        } catch (\Exception $e) {
            return new AlisaResponse($e->getMessage());
        }
        return new AlisaResponse(
            "Свободные место под номером: " . implode(", ", $this->parkingService->getFreeSpots())
        );
    }

    #[Route('/admin', name: 'admin')]
    #[Route('/admin/{route}', name: 'vue_pages', requirements: ['route' => '^.+'], methods: ['GET'])]
    public function admin(Request $request): Response
    {
        return new Response($this->twig->render('admin.html.twig'));
    }

    #[Route('/api/parking', name: 'parking_all', methods: ['GET'])]
    public function getAllParking(Request $request): JsonResponse
    {
        return new JsonResponse($this->parkingService->getParkingPreviews());
    }

    #[Route('/api/parking', name: 'parking_create', methods: ['POST'])]
    public function addParking(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $errors = $this->validator->validate(
            $data['stream'],
            [
                new NotBlank(),
                new Url(
                    protocols: ['rtsp', 'rtmp', 'http', 'https']
                )
            ]
        );

        if (count($errors) > 0) {
            $errorsString = (string)$errors;
            return new Response($errorsString);
        }
        $id = $this->parkingService->addParking($data['stream']);
        return new JsonResponse($this->createDefaultParkingPreview($id));
    }

    private function createDefaultParkingPreview(string $id): array{
        return ["id" => $id, "preview" => 'http://127.0.0.1:8090/still.jpg'];
    }
}
