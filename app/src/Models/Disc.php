<?php

namespace App\Models;

use PDOException;

class Disc extends Product
{
  private $size;

  //getters and setters
  public function setSize($size)
  {
    $this->size = $size;
  }

  public function getSize()
  {
    return $this->size;
  }

  //contructor with db
  public function __construct($db)
  {
    parent::__construct($db);
    $this->conn = $db;
  }


  public function add($request)
  {
    //create query
    $query = 'INSERT INTO ' . $this->tableName . ' SET
        sku = :sku,
        name = :name,
        price = :price,
        size = :size ';

    //prepare statement
    $stmt = $this->conn->prepare($query);

    //clean data
    $this->sku = htmlspecialchars(strip_tags($request->sku));
    $this->name = htmlspecialchars(strip_tags($request->name));
    $this->price = htmlspecialchars(strip_tags($request->price));
    $this->size = htmlspecialchars(strip_tags($request->size));

    //bind data
    $stmt->bindParam(':sku', $this->sku);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':price', $this->price);
    $stmt->bindParam(':size', $this->size);

    $this->executStatment($stmt);
  }
}
