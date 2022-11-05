<?php

namespace Parking\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class BarrierController extends AbstractController
{
    public function __construct(private Environment $twig)
    {
    }

    #[Route('/barrier', name: 'barrier', options: ['expose' => true], methods: ['GET'])]
    public function saveSpots(Request $request): Response
    {

        return new Response($this->twig->render('barrier.html.twig'));
    }

}
