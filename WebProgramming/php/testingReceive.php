<?php
include("sessionManager.php");
// Assume the current user is logged in and $_SESSION['user_id'] holds their ID
$user_id = $_SESSION['user_id'];  // Current logged-in user ID



// Database connection
$serverName = "localhost";
$db_username = "root";
$db_password = "";
$dbName = "mydb";
$conn = new mysqli($serverName, $db_username, $db_password, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the challenge for this user
$sql = "SELECT word_to_guess FROM challenges WHERE user_id = ? AND is_completed = false LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Challenge exists for this user
    $row = $result->fetch_assoc();
    $challenge_word = $row['word_to_guess'];
    

    echo json_encode($challenge_word);
    exit();
} else {
    echo "You have no active challenges.";
}

