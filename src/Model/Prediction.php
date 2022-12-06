<?php

namespace Parking\Model;

use Symfony\Component\Serializer\Annotation\Ignore;

use OpenApi\Attributes as OA;

class Prediction implements RectangleInterface, \JsonSerializable
{
    public function __construct(
        private string $label,
        private float $confidence,
        private int $x_min,
        private int $y_min,
        private int $x_max,
        private int $y_max
    ) {
    }

    #[OA\Property(example: "car")]
    public function getLabel(): string
    {
        return $this->label;
    }

    public function getConfidence(): float
    {
        return $this->confidence;
    }


    public function getXMin(): int
    {
        return $this->x_min;
    }

    public function getYMin(): int
    {
        return $this->y_min;
    }

    public function getXMax(): int
    {
        return $this->x_max;
    }

    public function getYMax(): int
    {
        return $this->y_max;
    }

    #[Ignore]
    public function isCar(): bool
    {
        return $this->label === 'car';
    }

    public function jsonSerialize(): array
    {
        return [
            'label' => $this->label,
            'confidence' => $this->confidence,
            'x' => $this->getX(),
            'y' => $this->getY(),
            'width' => $this->getWidth(),
            'height' => $this->getHeight(),
        ];
    }

    #[OA\Property(type: "integer")]
    public function getX(): int
    {
        return $this->x_min;
    }

    #[OA\Property(type: "integer")]
    public function getY(): int
    {
        return $this->y_min;
    }

    #[OA\Property(type: "integer")]
    public function getWidth(): int
    {
        return $this->x_max - $this->x_min;
    }

    #[OA\Property(type: "integer")]
    public function getHeight(): int
    {
        return $this->y_max - $this->y_min;
    }

    public function normalize(float $predictionDimension): void
    {
        $this->x_min = (int)($this->x_min * $predictionDimension);
        $this->y_min = (int)($this->y_min * $predictionDimension);
        $this->x_max = (int)($this->x_max * $predictionDimension);
        $this->y_max = (int)($this->y_max * $predictionDimension);
    }
}
