<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


require_once('../../vendor/autoload.php');

use App\Models\Product;
use App\Models\Disc;


use App\Database\Database;

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();

$product = new Product($db);

// Get row posted data
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(
        array('message' => 'You must provide a product data')
    );
    return;
}

if (!$data->sku || $data->sku == '') {
    echo json_encode(
        array('message' => 'You must provide a product sku')
    );
    return;
}

if (!$data->name || $data->name == '') {
    echo json_encode(
        array('message' => 'You must provide a product name')
    );
    return;
}

if (!$data->price) {
    echo json_encode(
        array('message' => 'You must provide a product price')
    );
    return;
}


if ($data->size) {
    $Disc = new Disc($db);
    // $Disc->setSku($data->sku);
    // $Disc->setName($data->name);
    // $Disc->setPrice($data->price);
    // $Disc->setSize($data->size);


    $Disc->add($data);
}
