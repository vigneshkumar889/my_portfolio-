<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "portfolio_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "Database connected successfully!";

?>