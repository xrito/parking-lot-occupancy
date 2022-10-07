<?php

namespace Parking\Service;

use Imagick;
use ImagickDraw;
use ImagickPixel;
use Parking\Model\Prediction;

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

    private function drawBorder(Imagick $image, Prediction $prediction): void
    {
        $draw = $this->createDraw();
        $draw->rectangle(
            $prediction->getXMin(),
            $prediction->getYMin(),
            $prediction->getXMax(),
            $prediction->getYMax()
        );
        $image->drawImage($draw);
    }

    private function createDraw(): ImagickDraw
    {
        $draw = new ImagickDraw();
        $draw->setFillOpacity(0);
        $draw->setStrokeColor(new ImagickPixel($this->color));
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

}
