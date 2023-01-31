<?php

namespace App\Database;

use PDO;
use PDOException;

class Database
{
    private $host = 'db';
    private $db_name = 'scandiweb';
    private $username = 'scandiweb';
    private $password = 'scandiweb';
    private $conn;

    public function connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }

        return $this->conn;
    }
}
