<?php
use Camera\Server;
use Camera\Service\ConfigService;

require_once __DIR__ . '/vendor/autoload.php';

(new Server(configService: new ConfigService()))->run();
