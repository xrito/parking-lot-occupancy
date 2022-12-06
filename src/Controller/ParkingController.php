<?php

namespace Parking\Controller;

use Doctrine\ODM\MongoDB\DocumentManager;
use Nelmio\ApiDocBundle\Annotation\Model;
use Parking\Document\Parking;
use Parking\Factory\ParkingPreviewFactory;
use Parking\Model\AlisaRequest;
use Parking\Model\AlisaResponse;
use Parking\Model\ParkingPreview;
use Parking\Service\ParkingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Twig\Environment;
use OpenApi\Attributes as OA;

class ParkingController extends AbstractController
{
    public function __construct(
        private ParkingService $parkingService,
        private ParkingPreviewFactory $parkingPreviewFactory,
        private DocumentManager $documentManager,
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
            "Свободные место под номером: " . implode(", ", $this->parkingService->getFreeSpotsById())
        );
    }

    #[Route('/admin', name: 'admin')]
    #[Route('/admin/{route}', name: 'vue_pages', requirements: ['route' => '^.+'], methods: ['GET'])]
    public function admin(Request $request): Response
    {
        return new Response($this->twig->render('admin.html.twig'));
    }

    /**
     * Returns the list of cams streams
     */
    #[Route('/api/streams', name: 'parking_streams', methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: 'Successful response',
        content: new OA\JsonContent(
            type: 'array',
            items: new OA\Items(
                properties: [
                    new OA\Property(property: 'id', type: 'string'),
                    new OA\Property(property: 'url', type: 'string')
                ],
                type: 'object'
            )
        )
    )]
    #[OA\Tag(name: 'camera')]
    public function getStreams(): JsonResponse
    {
        return new JsonResponse(
            array_map(fn(Parking $parking) => [
                'id' => $parking->getId(),
                'url' => $parking->getStream(),
            ], $this->documentManager->getRepository(Parking::class)->findAll())
        );
    }

    /**
     * Returns the list of parking
     */
    #[Route('/api/parking', name: 'parking_all', options: ['expose' => true], methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: 'Successful response',
        content: new OA\JsonContent(
            type: 'array',
            items: new OA\Items(
                ref: new Model(type: ParkingPreview::class)
            )
        )
    )]
    #[OA\Tag(name: 'parking')]
    public function getAllParking(Request $request): JsonResponse
    {
        return new JsonResponse($this->parkingService->getParkingPreviews());
    }

    /**
     * Find parking by id
     */
    #[Route('/api/parking/{id}', name: 'parking_one', options: ['expose' => true], methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: 'Successful response',
        content: new OA\JsonContent(
            ref: new Model(type: ParkingPreview::class, groups: ['detail'])
        )
    )]
    #[OA\Tag(name: 'parking')]
    public function getParking(string $id): JsonResponse
    {
        return new JsonResponse($this->parkingService->getParking($id));
    }

    /**
     * Deletes a parking by id
     */
    #[Route('/api/parking/{id}', name: 'parking_remove', options: ['expose' => true], methods: ['DELETE'])]
    #[OA\Tag(name: 'parking')]
    public function removeParking(string $id): Response
    {
        $this->parkingService->removeParking($id);
        return new JsonResponse('ok');
    }

    /**
     * Add new parking
     */
    #[Route('/api/parking', name: 'parking_create', options: ['expose' => true], methods: ['POST'])]
    #[OA\Post(requestBody: new OA\RequestBody(
        content: new OA\JsonContent(
            ref: new Model(
                type: Parking::class,
                groups: ['create'],
            ),
        )
    ))]
    #[OA\Tag(name: 'parking')]
    public function addParking(Request $request): Response
    {
        $contentType = $request->getContentType();

        switch ($contentType) {
            case 'json':
                $data = json_decode($request->getContent(), true);
                break;
            case 'form':
                $data = $request->request->all();
                break;
            default:
                return new Response('Unsupported content type', 400);
        }
        $parking = new Parking($data['name'], $data['stream']);
        $errors = $this->validator->validate($parking);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = [
                    'field' => $error->getPropertyPath(),
                    'message' => $error->getMessage()
                ];
            }
            return new JsonResponse($errorMessages, 400);
        }
        $this->parkingService->addParking($parking);
        return new JsonResponse($this->parkingPreviewFactory->createFromParking($parking));
    }
}
