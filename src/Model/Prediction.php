<?php

namespace Parking\Model;

class Prediction
{
    public function __construct(
        private string $label,
        private float $confidence,
        private float $x_min,
        private float $y_min,
        private float $x_max,
        private float $y_max
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
    public function getXMin(): float
    {
        return $this->x_min;
    }

    /**
     * @return float
     */
    public function getYMin(): float
    {
        return $this->y_min;
    }

    /**
     * @return float
     */
    public function getXMax(): float
    {
        return $this->x_max;
    }

    /**
     * @return float
     */
    public function getYMax(): float
    {
        return $this->y_max;
    }

    public function isCar(): bool
    {
        return $this->label === 'car';
    }
}
