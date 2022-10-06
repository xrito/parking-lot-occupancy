<?php

namespace Parking\Command;

use http\Message\Body;
use Imagick;
use ImagickDraw;
use ImagickPixel;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpClient\CurlHttpClient;
use Symfony\Component\Mime\Part\DataPart;
use Symfony\Component\Mime\Part\Multipart\FormDataPart;

class FindCarsCommand extends Command
{
    public function __construct(private string $publicPath = '/var/www/html/public')
    {
        parent::__construct("cars:find");
    }

    /**
     * @param string $src
     * @param string $dest
     * @return void
     */
    private function foundCars(
        string $src,
        string $dest): void
    {
        $detectApi = 'http://deepstack:5000/v1/vision/detection';
        $client = new CurlHttpClient();
        $formFields = [
            'min_confidence' => '0',
            'image' => DataPart::fromPath($src),
        ];
        $formData = new FormDataPart($formFields);
        $response = $client->request('POST', $detectApi, [
            'headers' => $formData->getPreparedHeaders()->toArray(),
            'body' => $formData->bodyToIterable(),
        ]);
        $res = json_decode($response->getContent(), true);
        $carPredictions = array_filter($res['predictions'], fn($prediction) => $prediction['label'] === 'car');
        $image = new Imagick($src);
        foreach ($carPredictions as $prediction) {
                $this->drawRectangle(
                    $image,
                    $prediction['x_min'],
                    $prediction['y_min'],
                    $prediction['x_max'],
                    $prediction['y_max'],
                    $prediction['label'] . ': ' . round($prediction['confidence'], 2)
                );
        }
        $image->writeImage($dest);
        $this->foundSlots($carPredictions);
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $sectionDir = $this->publicPath . '/sections';
        $output->writeln("Find cars");
        $snapshotDest = $this->publicPath . '/capture.jpg';
        $snapshotImage = $this->makeCameraSnapshot($snapshotDest);
        $imagePaths = $this->makeSectionImages($snapshotImage, $sectionDir);
        $this->foundCars($snapshotDest, $this->publicPath . '/new.jpg');
        $output->writeln("Done");
        return 0;
    }

    private function makeCameraSnapshot(string $snapshotPath): Imagick
    {
        $snapshotApi = 'http://camera:8090/still.jpg';
        $image = file_get_contents($snapshotApi);
        file_put_contents($snapshotPath, $image);
        return new Imagick($snapshotPath);
    }

    private function drawRectangle(Imagick $image, $x1, $y1, $x2, $y2, $label, $color = 'red')
    {
        $draw = new ImagickDraw();
        $draw->setFillOpacity(0);
        $draw->setStrokeColor(new ImagickPixel($color));
        $draw->setStrokeWidth(2);
        $draw->rectangle($x1, $y1, $x2, $y2);
        $image->drawImage($draw);
        $draw->setFont('/var/www/html/public/Montserrat.otf');
        $draw->setFontSize(30);
        $image->annotateImage(
            $draw,
            $x1,
            $y1 - 10,
            0,
            $label
        );
    }

    /**
     * @param Imagick $snapshotImage
     * @param string $sectionDir
     * @return string[]
     * @throws \ImagickException
     */
    private function makeSectionImages( Imagick $snapshotImage, string $sectionDir): array
    {
        $sections = $this->getSections();
        $imagePaths = [];
        foreach ($sections as $ind => $section) {
            $sectionImage = clone $snapshotImage;
            $sectionImage->cropImage($section['width'], $section['height'], $section['x'], $section['y']);
            $imagePath = $sectionDir . '/section-' . $ind . '.jpg';
            $sectionImage->writeImage($imagePath);
            $imagePaths[] = $imagePath;
        }
        return $imagePaths;

    }

    private function getSections(): array
    {
        $sectionPath = $this->publicPath . '/parking.json';
        return json_decode(file_get_contents($sectionPath), true);
    }

    private function foundSlots(array $predictions)
    {
        $sections = $this->getSections();
        $sectionPredictions = [];
        foreach ($sections as $ind => $section) {
            foreach ($predictions as $prediction) {
                if($this->isIntersect($section, $prediction))
                {
                    $sectionArea = $section['width'] * $section['height'];
                    $intersectArea = $this->calculateIntersectArea($section, $prediction);
                    $intersectAreaInPercent = $intersectArea / $sectionArea * 100;
                    if(!isset($sectionPredictions[$ind]) || $sectionPredictions[$ind] < $intersectAreaInPercent){
                        $sectionPredictions[$ind] = $intersectAreaInPercent;
                    }
                }
            }
        }
        return $sectionPredictions;
    }

    //проверить пересекаются ли прямоугольники секции и предсказания
    private function isIntersect(array $section, array $prediction):bool
    {
        $x1 = $section['x'];
        $y1 = $section['y'];
        $x2 = $section['x'] + $section['width'];
        $y2 = $section['y'] + $section['height'];
        $x3 = $prediction['x_min'];
        $y3 = $prediction['y_min'];
        $x4 = $prediction['x_max'];
        $y4 = $prediction['y_max'];
        return !($x2 < $x3 || $x4 < $x1 || $y2 < $y3 || $y4 < $y1);
    }

    private function calculateIntersectArea(array $section, array $prediction): int
    {
        $x1 = $section['x'];
        $y1 = $section['y'];
        $x2 = $section['x'] + $section['width'];
        $y2 = $section['y'] + $section['height'];
        $x3 = $prediction['x_min'];
        $y3 = $prediction['y_min'];
        $x4 = $prediction['x_max'];
        $y4 = $prediction['y_max'];
        $x5 = max($x1, $x3);
        $y5 = max($y1, $y3);
        $x6 = min($x2, $x4);
        $y6 = min($y2, $y4);
        return ($x6 - $x5) * ($y6 - $y5);
    }

}
