<?php

namespace App\Models;

class Book extends Product
{
  private $weight;

  //getters and setters
  public function setWeight($weight)
  {
    $this->weight = $weight;
  }

  public function getWeight()
  {
    return $this->weight;
  }

  public function add($body)
  {
    //create query
    $query = 'INSERT INTO ' . $this->tableName . ' SET 
        sku = :sku, 
        name = :name, 
        price = :price, 
        weight = :weight,
        productType = "book"
         ';

    //prepare statement
    $stmt = $this->conn->prepare($query);

    //clean data
    $this->sku = htmlspecialchars(strip_tags($body->sku));
    $this->name = htmlspecialchars(strip_tags($body->name));
    $this->price = htmlspecialchars(strip_tags($body->price));
    $this->weight = htmlspecialchars(strip_tags($body->weight));


    //bind data
    $stmt->bindParam(':sku', $this->sku);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':price', $this->price);
    $stmt->bindParam(':weight', $this->weight);

    //execute query
    $this->executStatment($stmt);
  }
}
