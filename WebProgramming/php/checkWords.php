<?php
ob_clean(); // Clears the output buffer
header('Content-Type: application/json'); // Ensure the response is sent as JSON

$serverName = "localhost";
$db_username = "root";
$db_password = "";
$dbName = "mydb";

$conn = new mysqli($serverName, $db_username, $db_password, $dbName);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$response = array();

if (isset($_POST["word"])) {

  $inputWord = htmlspecialchars($_POST["word"]);
  $inputWord = trim($inputWord);

  $sql = "SELECT word
      FROM words
      where word=?
      ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $inputWord); // Bind the parameter
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    // Word exists in the database
    $response['status'] = 'success';
    $response['message'] = 'Word exists!';
  } else {
    // Word doesn't exist in the database
    $response['status'] = 'not_found';
    $response['message'] = 'Word not found!';
  }

  $stmt->close();
} else {
  $response['status'] = 'error';
  $response['message'] = 'No word received.';
}

$conn->close();
echo json_encode($response);
