<?php

namespace Parking\Command;

use DateTimeZone;
use GuzzleHttp\Client;
use GuzzleHttp\Promise\EachPromise;
use GuzzleHttp\Promise\PromiseInterface;
use Psr\Http\Message\ResponseInterface;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Process\Process;

class DownloadVideoCommand extends Command
{
    private Client $client;
    private string $path = '/var/www/html/public/intelpark';
    private TemporaryDirectory $tmpDir;

    public function __construct()
    {
        $this->client = new Client();
        $this->tmpDir = (new TemporaryDirectory());
        parent::__construct("parking:download-video");
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln("Download video");
        $timezone = new DateTimeZone('Europe/Moscow');
        $fromDate = new \DateTimeImmutable('2022-10-13 6:20:32', $timezone);
        $toDate = new \DateTimeImmutable('2022-10-13 6:21:00', $timezone);

        $promises = [];
        $this->tmpDir->create();
        for ($timestamp = $fromDate->getTimestamp(); $timestamp <= $toDate->getTimestamp(); $timestamp += 2) {
            $url = "https://video1.intelpark.ru/921-50ac2ed41477bfc0805bb464619fd8e1/$timestamp-preview.mp4";
            $filename = "$timestamp.mp4";
            $promises[] = $this->downloadVideo($url, $filename);
        }

        $progressBar = new ProgressBar($output, count($promises));
        $progressBar->start();
        $eachPromise = new EachPromise($promises, [
            'concurrency' => 2,
            'fulfilled' => function (ResponseInterface $response, $index) use ($output,$progressBar) {
                $progressBar->advance();
            },
            'rejected' => function ($reason, $index) use ($output) {
                $output->writeln("Error {$index}: {$reason}");
            },
        ]);

        $eachPromise->promise()->wait();
        $progressBar->finish();
        $output->writeln("");
        return Command::SUCCESS;
    }

    private function downloadVideo(string $url, string $filename): PromiseInterface
    {
        return $this->client->getAsync( $url, ['sink' => $this->tmpDir->path($filename)]);
    }


}
