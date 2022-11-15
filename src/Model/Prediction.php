<?php

namespace Parking\Model;

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

    /**
     * @return string
     */
    public function getLabel(): string
    {
        return $this->label;
    }

    /**
     * @return float
     */
    public function getConfidence(): float
    {
        return $this->confidence;
    }

    /**
     * @return float
     */
    public function getXMin(): int
    {
        return $this->x_min;
    }

    /**
     * @return float
     */
    public function getYMin(): int
    {
        return $this->y_min;
    }

    /**
     * @return float
     */
    public function getXMax(): int
    {
        return $this->x_max;
    }

    /**
     * @return float
     */
    public function getYMax(): int
    {
        return $this->y_max;
    }

    public function isCar(): bool
    {
        return $this->label === 'car';
    }

    public function jsonSerialize(): array
    {
        return [
            'label' => $this->label,
            'confidence' => $this->confidence,
            'x' => $this->x_min,
            'y' => $this->y_min,
            'width' => $this->x_max - $this->x_min,
            'height' => $this->y_max - $this->y_min,
        ];
    }

    public function normalize(float $predictionDimension): void
    {
        $this->x_min = (int)($this->x_min * $predictionDimension);
        $this->y_min = (int)($this->y_min * $predictionDimension);
        $this->x_max = (int)($this->x_max * $predictionDimension);
        $this->y_max = (int)($this->y_max * $predictionDimension);
    }
}
