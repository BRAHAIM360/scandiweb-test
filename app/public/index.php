<?php
// require __DIR__ . '../vendor/autoload.php';
echo 'Hello World';

// use src\ProductApi;
// 
require ('../vendor/autoload.php');
use App\Models\Product;
use App\Database\Database;	
// use App\Database\Connection;	

$database = new Database();
$db = $database->connect();
$product = new Product($db);
// $product->setName('test');
echo $product->getName();

// $product = new ProductApi();

// if ($_SERVER['REQUEST_METHOD'] === 'GET') {
//     $product->handleGetRequest();
// } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $product->handlePostRequest();
// }