<?php

namespace App\Models;

class Furniture extends Product
{
  private $height;
  private $length;
  private $width;

  //getters and setters
  public function setHeight($height)
  {
    $this->height = $height;
  }

  public function getHeight()
  {
    return $this->height;
  }

  public function setLength($length)
  {
    $this->length = $length;
  }

  public function getLength()
  {
    return $this->length;
  }

  public function setWidth($width)
  {
    $this->width = $width;
  }

  public function getWidth()
  {
    return $this->width;
  }

  public function add($request)
  {
    //create query
    $query = 'INSERT INTO ' . $this->tableName . ' SET
        sku = :sku,
        name = :name,
        price = :price,
        width = :width,
        height = :height,
        length = :length ';

    //prepare statement
    $stmt = $this->conn->prepare($query);

    //clean data
    $this->sku = htmlspecialchars(strip_tags($request->sku));
    $this->name = htmlspecialchars(strip_tags($request->name));
    $this->price = htmlspecialchars(strip_tags($request->price));
    $this->width = htmlspecialchars(strip_tags($request->width));
    $this->height = htmlspecialchars(strip_tags($request->height));
    $this->length = htmlspecialchars(strip_tags($request->length));


    //bind data
    $stmt->bindParam(':sku', $this->sku);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':price', $this->price);
    $stmt->bindParam(':width', $this->width);
    $stmt->bindParam(':height', $this->height);
    $stmt->bindParam(':length', $this->length);

    //execute query
    $this->executStatment($stmt);
  }
}
