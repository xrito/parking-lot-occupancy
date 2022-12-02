<?php

namespace Parking\Service;

use GuzzleHttp\Client;
use Symfony\Component\Mercure\HubInterface;

class MercureHubService
{

    private Client $client;

    public function __construct(private HubInterface $hub)
    {
        $this->client = new Client();
    }

    private function getSubscriptionsEndpoint(): string
    {
        return $this->hub->getUrl() . '/subscriptions';
    }

    public function getSubscriptions(): array
    {
        $this->hub->getUrl() . '/subscriptions';
        $jwt = $this->hub->getFactory()->create(['*']);
        $subscriptionsResponse = $this->client->get($this->getSubscriptionsEndpoint(), [
            'headers' =>
                [
                    'Authorization' => "Bearer $jwt"
                ]
        ]);
        $subscriptionDataJson = $subscriptionsResponse->getBody()->getContents();
        $subscriptionData = json_decode($subscriptionDataJson, true);
        return $subscriptionData['subscriptions'];
    }
}
