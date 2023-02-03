<?php
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");

require_once('../../vendor/autoload.php');

use App\Database\Database;
use App\Models\Product;

$input = file_get_contents("php://input");
$data = json_decode($input, true);


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

mysqli_close($conn);
