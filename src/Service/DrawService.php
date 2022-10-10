<?php

namespace Parking\Service;

use Imagick;
use ImagickDraw;
use ImagickPixel;
use Parking\Model\Prediction;
use Parking\Model\RectangleInterface;
use Parking\Model\Spot;

class DrawService
{

    public function __construct(
        private string $fontPath,
        private string $color = 'red',
        private int $fontSize = 30,
        private int $borderWidth = 2)
    {
    }

    /**
     * @param string $src
     * @param string $dest
     * @param Prediction[] $predictions
     * @return void
     */
    public function drawPredictions(string $src, string $dest, array $predictions): void
    {
        $image = new Imagick($src);
        foreach ($predictions as $prediction) {
            $this->drawPrediction($image, $prediction);
        }
        $image->writeImage($dest);
    }

    private function drawPrediction(Imagick $image, Prediction $prediction): void
    {
        $this->drawBorder($image, $prediction);
        $this->drawLabel($image, $prediction);
    }

    private function drawBorder(Imagick $image, RectangleInterface $rectangle, string $color = null): void
    {
        $draw = $this->createDraw($color);
        $draw->rectangle(
            $rectangle->getXMin(),
            $rectangle->getYMin(),
            $rectangle->getXMax(),
            $rectangle->getYMax()
        );
        $image->drawImage($draw);
    }

    private function createDraw(string $color = null): ImagickDraw
    {
        $draw = new ImagickDraw();
        $draw->setFillOpacity(0);
        $draw->setStrokeColor(new ImagickPixel($color ?? $this->color));
        $draw->setStrokeWidth($this->borderWidth);
        $draw->setFont($this->fontPath);
        $draw->setFontSize($this->fontSize);
        return $draw;
    }

    private function drawLabel(Imagick $image, Prediction $prediction): void
    {
        $label = $prediction->getLabel() . ': ' . round($prediction->getConfidence(), 2);
        $draw = $this->createDraw();
        $image->annotateImage(
            $draw,
            $prediction->getXMin(),
            $prediction->getYMin() - 10,
            0,
            $label
        );
    }

    /**
     * @param string $snapshotDest
     * @param string $snapshotDest1
     * @param Spot[] $spots
     * @return void
     */
    public function drawSpots(string $snapshotDest, string $snapshotDest1, array $spots): void
    {
        $image = new Imagick($snapshotDest) ;
        foreach ($spots as $ind => $spot) {
            $this->drawBorder($image, $spot, 'green');
            $draw = $this->createDraw('green');
             $image->annotateImage(
                $draw,
                $spot->getXMin(),
                $spot->getYMin() - 10,
                0,
                'Место: ' . $ind + 1
            );
        }
        $image->writeImage($snapshotDest1);

    }


}
