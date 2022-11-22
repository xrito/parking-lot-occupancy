<?php

namespace Parking\Streaming;

use Parking\Streaming\Model\Connection;

class ConnectionStatusExtractor
{
    public function __construct(private string $statusHtml)
    {
    }

    /**
     * @return Connection[]
     */
    public function extract(): array
    {
        $tables = $this->getAllTables($this->statusHtml);
        $connectionStatusTable = $tables[count($tables) - 1];
        $connectionList = [];
        foreach ($connectionStatusTable as $row) {
            if(empty($row)) {
                continue;
            }
            $connectionList[] = new Connection(
                file: $row[1],
                ip: $row[2],
                proto: $row[3],
                state: $row[4],
                targetBits: $row[5],
                ActualBits: $row[6],
                bytesTransferred: $row[7]
            );
        }
        return $connectionList;
    }

    private function getAllTables(string $statusHtml): array
    {
        $dom = new \DOMDocument();
        $dom->loadHTML($statusHtml);
        $tables = $dom->getElementsByTagName('table');
        $result = [];
        foreach ($tables as $table) {
            $result[] = $this->getTable($table);
        }
        return $result;
    }

    private function getTable(\DOMElement $table): array
    {
        $result = [];
        $rows = $table->getElementsByTagName('tr');
        foreach ($rows as $row) {
            $result[] = $this->getRow($row);
        }
        return $result;
    }

    private function getRow(mixed $row)
    {
        $result = [];
        $cells = $row->getElementsByTagName('td');
        foreach ($cells as $cell) {
            $result[] = $cell->nodeValue;
        }
        return $result;
    }
}
