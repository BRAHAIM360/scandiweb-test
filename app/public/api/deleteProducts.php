<?php
header('Access-Control-Allow-Origin: *');
// header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:DELETE');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:  DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    exit;
}
require_once('../../vendor/autoload.php');

use App\Database\Database;
use App\Models\Product;

$input = file_get_contents("php://input");
$data = json_decode($input, true);
header('Access-Control-Allow-Origin: http://localhost:3000');

if (empty($data["skus"])) {
    http_response_code(400);
    echo json_encode(["message" => "Missing skus"]);
    exit;
}

//Instantiate DB & connect
$database = new Database();
$db = $database->connect();


// Delete products based on sku
foreach ($data["skus"] as $sku) {
    header('Access-Control-Allow-Origin: *');

    $product = new Product($db);
    $product->setSku($sku);
    $isDeleted = $product->deleteProduct();
    if (!$isDeleted) {
        http_response_code(400);


        echo json_encode(["message" => "Product not found"]);
        exit;
    }
}

// Return success
http_response_code(200);
echo json_encode(["message" => "Products deleted"]);
