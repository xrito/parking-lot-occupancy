<?php

namespace Parking\Model;

class Spot implements RectangleInterface
{

    public function __construct(
        private int $x,
        private int $y,
        private int $width,
        private int $height)
    {
    }

    public function isFree(RectangleInterface $prediction): bool
    {
        return ($this->getXMax() < $prediction->getXMin() || $prediction->getXMax() < $this->getXMin(
            ) || $this->getYMax() < $prediction->getYMin() || $prediction->getYMax() < $this->getYMin());
    }

    /**
     * @param RectangleInterface $prediction
     * @return float - from 0 to 1
     */
    public function getUsedSpace(RectangleInterface $prediction): float
    {
        $intersectArea = $this->calculateIntersectArea($prediction);
        return $intersectArea / $this->getArea();
    }

    private function getArea(): int
    {
        return $this->width * $this->height;
    }

    private function calculateIntersectArea(RectangleInterface $prediction): int
    {
        $minX = max($this->getXMin(), $prediction->getXMin());
        $minY = max($this->getYMin(), $prediction->getYMin());
        $maxX = min($this->getXMax(), $prediction->getXMax());
        $maxY = min($this->getYMax(), $prediction->getYMax());
        if ($minX > $maxX || $minY > $maxY) {
            return 0;
        }
        $horizontal = $maxX - $minX;
        $vertical = $maxY - $minY;
        return $horizontal * $vertical;
    }

    public function getXMin(): int
    {
        return $this->x;
    }

    public function getYMin(): int
    {
        return $this->y;
    }

    public function getXMax(): int
    {
        return $this->x + $this->width;
    }

    public function getYMax(): int
    {
        return $this->y + $this->height;
    }
}
