<?php

namespace Parking\Model;

class DetectionResponse
{

    /**
     * @var Prediction[]
     */
    public array $predictions;
    public bool $success;
    public int $duration;

}
