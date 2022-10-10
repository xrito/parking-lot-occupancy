<?php

namespace Parking\Model;

use PHPUnit\Framework\TestCase;

class SpotTest extends TestCase
{
    private Spot $spot;

    protected function setUp(): void
    {
        $this->spot = new Spot(0, 0, 10, 10);
    }

    public function testIsFreeWhenIntersectPrediction()
    {
        $prediction = $this->createPredictionMock(5, 5, 15, 15);
        $this->assertFalse($this->spot->isFree($prediction));
    }

    public function testIsFreeWhenNotIntersectPrediction()
    {
        $prediction = $this->createPredictionMock(15, 15, 25, 25);
        $this->assertTrue($this->spot->isFree($prediction));
    }

    public function testGetUsedSpaceWhenPartiallyIntersectsPrediction()
    {
        $prediction = $this->createPredictionMock(5, 5, 15, 15);
        $this->assertEquals(0.25, $this->spot->getUsedSpace($prediction));
    }

    public function testGetUsedSpaceWhenFullyIntersectsPrediction()
    {
        $prediction = $this->createPredictionMock(0, 0, 10, 10);
        $this->assertEquals(1, $this->spot->getUsedSpace($prediction));
    }

    public function testGetUsedSpaceWhenNotIntersectsPrediction()
    {
        $prediction = $this->createPredictionMock(15, 15, 25, 25);
        $this->assertEquals(0, $this->spot->getUsedSpace($prediction));
    }

    private function createPredictionMock(int $xMin, int $yMin, int $xMax, int $yMax): RectangleInterface
    {
        $prediction = $this->createMock(RectangleInterface::class);
        $prediction->method('getXMin')->willReturn($xMin);
        $prediction->method('getYMin')->willReturn($yMin);
        $prediction->method('getXMax')->willReturn($xMax);
        $prediction->method('getYMax')->willReturn($yMax);
        return $prediction;
    }

    public function testGetXMax()
    {
        $spot = new Spot(0, 0, 1, 2);
        $this->assertEquals(1, $spot->getXMax());
    }

    public function testGetYMax()
    {
        $spot = new Spot(0, 0, 1, 2);
        $this->assertEquals(2, $spot->getYMax());
    }
}
