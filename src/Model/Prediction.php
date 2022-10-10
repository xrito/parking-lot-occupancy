<?php

namespace Parking\Model;

class Prediction implements RectangleInterface
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
}
