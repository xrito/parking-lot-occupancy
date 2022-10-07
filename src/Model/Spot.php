<?php

namespace Parking\Model;

class Spot
{

    public function __construct(
        private int $x,
        private int $y,
        private int $width,
        private int $height)
    {
    }

    public function isFree(Prediction $prediction): bool
    {
        return ($this->getXMax() < $prediction->getXMin() || $prediction->getXMax() < $this->getXMin(
            ) || $this->getYMax() < $prediction->getYMin() || $prediction->getYMax() < $this->getYMin());
    }

    /**
     * @param Prediction $prediction
     * @return float - from 0 to 1
     */
    public function getUsedSpace(Prediction $prediction): float
    {
        $intersectArea = $this->calculateIntersectArea($prediction);
        return $intersectArea / $this->getArea();
    }

    private function getArea(): int
    {
        return $this->width * $this->height;
    }

    private function calculateIntersectArea(Prediction $prediction): int
    {
        $minX = max($this->getXMin(), $prediction->getXMin());
        $minY = max($this->getYMin(), $prediction->getYMin());
        $maxX = min($this->getXMax(), $prediction->getXMax());
        $maxY = min($this->getYMax(), $prediction->getYMax());
        $horizontal = $maxX - $minX;
        $vertical = $maxY - $minY;
        return $horizontal * $vertical;
    }

    private function getXMin(): int
    {
        return $this->x;
    }

    private function getYMin(): int
    {
        return $this->y;
    }

    private function getXMax(): int
    {
        return $this->x + $this->width;
    }

    private function getYMax(): int
    {
        return $this->x + $this->width;
    }
}
