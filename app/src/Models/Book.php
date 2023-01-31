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

  public function add($request)
  {
    //create query
    $query = 'INSERT INTO ' . $this->tableName . ' SET 
        sku = :sku, 
        name = :name, 
        price = :price, 
        weight = :weight ';

    //prepare statement
    $stmt = $this->conn->prepare($query);

    //clean data
    $this->sku = htmlspecialchars(strip_tags($request['sku']));
    $this->name = htmlspecialchars(strip_tags($request['name']));
    $this->price = htmlspecialchars(strip_tags($request['price']));
    $this->weight = htmlspecialchars(strip_tags($request['weight']));

    //bind data
    $stmt->bindParam(':sku', $this->sku);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':price', $this->price);
    $stmt->bindParam(':weight', $this->weight);

    //execute query
    $this->executStatment($stmt);
  }
}
