<?php
include 'cors.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

$servername = "localhost";
$username = "root";
$password = "";
$database = "online_shop";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // SIGN-UP
    if (isset($_POST['register']) && $_POST['register'] === 'true') {
        error_log("Registration process started");

        error_log("Received registration request: " . print_r($_POST, true));

        if (isset($_POST['username']) && isset($_POST['password'])) {
            $username = $conn->real_escape_string($_POST['username']);
            $password = $_POST['password'];
            $email = (!empty($_POST['email'])) ? $conn->real_escape_string($_POST['email']) : 'abc@abc.com';
            $isAdmin = false;

            $checkUserQuery = "SELECT * FROM users WHERE username=?";
            $stmt = $conn->prepare($checkUserQuery);

            if ($stmt === false) {
                error_log("Error in SELECT query preparation: " . $conn->error);
            } else {
                $stmt->bind_param("s", $username);
                $stmt->execute();
                $checkUserResult = $stmt->get_result();

                if ($checkUserResult === false) {
                    error_log("Error in SELECT query execution: " . $stmt->error);
                } else {
                    if ($checkUserResult->num_rows > 0) {
                        header('Content-Type: application/json');
                        echo json_encode(array("error" => "Registration failed. User already exists."));
                        exit();
                    } else {
                        $insertUserQuery = "INSERT INTO users (username, password, email, isAdmin) VALUES (?, ?, ?, ?)";
                        $stmt = $conn->prepare($insertUserQuery);

                        if ($stmt === false) {
                            error_log("Error in INSERT query preparation: " . $conn->error);
                        } else {
                            $stmt->bind_param("sssi", $username, $password, $email, $isAdmin);
                            $stmt->execute();

                            if ($stmt->execute()) {
                                header('Content-Type: application/json');
                                echo json_encode(array("message" => "User registered successfully."));
                                exit();
                            } else {
                                error_log("Error in INSERT query execution: " . $stmt->error);
                            }
                        }
                    }
                }
            }
        }
    }

    // LOGIN
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $conn->real_escape_string($_POST['username']);
        $password = $_POST['password'];

        $checkUserQuery = "SELECT * FROM users WHERE username=?";
        $stmt = $conn->prepare($checkUserQuery);

        if ($stmt === false) {
            error_log("Error in SELECT query preparation: " . $conn->error);
        } else {
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $checkUserResult = $stmt->get_result();

            if ($checkUserResult === false) {
                error_log("Error in SELECT query execution: " . $stmt->error);
            } else {
                if ($checkUserResult->num_rows > 0) {
                    $user = $checkUserResult->fetch_assoc();

                    if ($password === $user['password']) {
                        header('Content-Type: application/json');
                        echo json_encode(array("message" => "User logged in successfully."));
                        exit();
                    } else {
                        header('Content-Type: application/json');
                        echo json_encode(array("error" => "Login failed. Incorrect password."));
                        exit();
                    }
                } else {
                    header('Content-Type: application/json');
                    echo json_encode(array("error" => "Login failed. User not found."));
                    exit();
                }
            }
        }
    }
    // ADD PRODUCT
    if (isset($_POST['addProduct']) && $_POST['addProduct'] === "true") {
        $productName = $conn->real_escape_string($_POST['name']);
        $productDescription = $conn->real_escape_string($_POST['description']);
        $productPrice = $conn->real_escape_string($_POST['price']);
        $productPicture = $conn->real_escape_string($_POST['picture']);
        $ownerName = $conn->real_escape_string($_POST['ownerName']);
        $ownerTel = $conn->real_escape_string($_POST['ownerTel']);
    
        $insertProductQuery = "INSERT INTO products (name, description, price, picture, ownerName, ownerTel) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($insertProductQuery);
    
        if ($stmt === false) {
            error_log("Error in INSERT query preparation: " . $conn->error);
        } else {
            $stmt->bind_param("ssdsss", $productName, $productDescription, $productPrice, $productPicture, $ownerName, $ownerTel);
    
            if ($stmt->execute()) {
                header('Content-Type: application/json');
                echo json_encode(array("message" => "Product added successfully."));
                exit();
            } else {
                error_log("Error in INSERT query execution: " . $stmt->error);
            }
        }
    }
}

$result = $conn->query("SELECT * FROM products");

$products = array();

while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

header('Content-Type: application/json');
echo json_encode($products);

$conn->close();
?>