<?php

namespace Camera;

class Logger
{
    public function log(string $message): void
    {
        error_log($message);
    }
}
