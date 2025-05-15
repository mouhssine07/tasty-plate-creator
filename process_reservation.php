<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed: " . $conn->connect_error
    ]));
}

// Only process POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize inputs
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $date = trim($_POST['date'] ?? '');
    $time = trim($_POST['time'] ?? '');
    $guests = trim($_POST['guests'] ?? '');
    $occasion = trim($_POST['occasion'] ?? '');
    $specialRequests = trim($_POST['specialRequests'] ?? '');

    // Simple validation (optional, you can expand it)
    if (empty($name) || empty($email) || empty($phone) || empty($date) || empty($time) || empty($guests)) {
        echo json_encode([
            "success" => false,
            "message" => "Please fill in all required fields."
        ]);
        $conn->close();
        exit;
    }

    // Prepare SQL (to avoid SQL injection)
    $stmt = $conn->prepare("INSERT INTO reservation (name, email, phone, date, time, guests, occasion, special_requests) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $email, $phone, $date, $time, $guests, $occasion, $specialRequests);

    // Execute and send response
    if ($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Reservation received! We'll confirm it via email soon."
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Error: " . $stmt->error
        ]);
    }

    // Clean up
    $stmt->close();
    $conn->close();
    exit;
}
?>
