<?php

namespace Parking\Model;

interface RectangleInterface
{
    public function getXMin(): int;
    public function getYMin(): int;
    public function getXMax(): int;
    public function getYMax(): int;
}
