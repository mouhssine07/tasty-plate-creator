
<?php
// Database configuration
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password is empty
$dbname = "restaurant_db"; // You'll need to create this database in phpMyAdmin

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize inputs
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $date = $conn->real_escape_string($_POST['date']);
    $time = $conn->real_escape_string($_POST['time']);
    $guests = $conn->real_escape_string($_POST['guests']);
    $occasion = isset($_POST['occasion']) ? $conn->real_escape_string($_POST['occasion']) : "";
    $specialRequests = isset($_POST['specialRequests']) ? $conn->real_escape_string($_POST['specialRequests']) : "";

    // SQL query to insert data
    $sql = "INSERT INTO reservations (name, email, phone, date, time, guests, occasion, special_requests)
            VALUES ('$name', '$email', '$phone', '$date', '$time', '$guests', '$occasion', '$specialRequests')";

    // Response array
    $response = [];

    // Execute query and check if successful
    if ($conn->query($sql) === TRUE) {
        $response['success'] = true;
        $response['message'] = "Reservation Request Received! We'll confirm your reservation shortly via email.";
    } else {
        $response['success'] = false;
        $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    
    // Close connection
    $conn->close();
    exit;
}
?>
