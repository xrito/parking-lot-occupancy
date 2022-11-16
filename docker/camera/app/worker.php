<?php
declare(strict_types=1);

use Camera\Service\ConfigService;
use Camera\Worker;
require_once __DIR__ . '/vendor/autoload.php';

(new Worker(configService: new ConfigService()))->run();