<?php

namespace App\Models;

use PDOException;

// use App\Core\Model\Model;

class Product
{
  protected string $tableName = 'products';
  protected $conn;

  protected $sku;
  protected $name;
  protected $price;
  protected $productType;


  // public function __construct($sku, $name, $price, $type, $size=null, $weight=null, $height=null, $length=null, $width=null)
  // {
  //     $this->sku = $sku;
  //     $this->name = $name;
  //     $this->price = $price;
  //     $this->type = $type;
  //     $this->size = $size;
  //     $this->weight = $weight;
  //     $this->height = $height;
  //     $this->length = $length;
  //     $this->width = $width;
  // }

  //construcor with db 
  public function __construct($db)
  {
    $this->conn = $db;
  }

  //get products
  public function getProducts()
  {
    $query = 'SELECT * FROM ' . $this->tableName;

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return $stmt;
  }

  // getters and setters
  public function setSku($sku)
  {
    $this->sku = $sku;
  }

  public function getSku()
  {
    return $this->sku;
  }

  public function setName($name)
  {
    $this->name = $name;
  }

  public function getName()
  {
    return $this->name;
  }

  public function setPrice($price)
  {
    $this->price = $price;
  }

  public function getPrice()
  {
    return $this->price;
  }

  public function setType($productType)
  {
    $this->productType = $productType;
  }

  public function getproductType()
  {
    return $this->productType;
  }

  protected function executStatment($stmt)
  {
    try {
      $stmt->execute();
      header(http_response_code(201));
      echo json_encode(
        array('message' => 'Record created')
      );
      return true;
    } catch (PDOException $e) {

      if (str_contains($e, '1062 Duplicate entry')) {
        header(http_response_code(409));
        echo json_encode(
          array('message' => 'Duplicate entry')
        );
      } else {
        header(http_response_code(500));
        echo json_encode(
          array(
            'message' => 'Internal server error',
            'error' => $e->getMessage()
          )
        );
      }
      return false;
    }
  }

  //delete a list of products 
  public function deleteProduct()
  {
    $query = 'DELETE FROM ' . $this->tableName . ' WHERE sku = :sku';
    $stmt = $this->conn->prepare($query);
    $this->sku = htmlspecialchars(strip_tags($this->sku));
    $stmt->bindParam(':sku', $this->sku);
    return  $stmt->execute();
  }
}
