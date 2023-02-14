<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


require_once('../../../vendor/autoload.php');

use App\Models\Product;
use App\Models\Disc;
use App\Models\Book;


use App\Database\Database;
use App\Models\Furniture;

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


if (property_exists($data, 'size')) {
    // echo "size";
    $Disc = new Disc($db);
    $Disc->add($data);
    return;
}

if (property_exists($data, 'weight')) {
    $Book = new Book($db);
    $Book->add($data);
    return;
}

if (property_exists($data, 'height') && property_exists($data, 'width') && property_exists($data, 'length')) {
    $Furniture = new Furniture($db);
    $Furniture->add($data);
    return;
}
