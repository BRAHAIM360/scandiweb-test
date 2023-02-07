<?php
// echo    'Post request';
//Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With');

error_reporting(E_ERROR | E_PARSE);
require_once('../../vendor/autoload.php');

use App\Models\Product;

use App\Database\Database;

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

//Instantiate product object
$product = new Product($db);

//product qyery
$result = $product->getProducts();

//get row count
$num = $result->rowCount();

//check if any products
if ($num > 0) {
    //product array
    $products_arr = array();
    $products_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $product_item = array(
            'sku' => $sku,
            'name' => $name,
            'price' => $price,
            'productType' => $productType,
            'size' => $size,
            'weight' => $weight,
            'height' => $height,
            'width' => $width,
            'length' => $length
        );

        //push to "data"
        array_push($products_arr['data'], $product_item);
    }

    //turn to JSON & output
    echo json_encode($products_arr);
} else {
    //no products
    echo json_encode(
        array('message' => 'No products found')
    );
}
