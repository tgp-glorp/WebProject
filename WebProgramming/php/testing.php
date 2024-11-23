<?php


$word="";
$userId="";
if($_SERVER['REQUEST_METHOD']==="POST"){
  $userId=htmlspecialchars($_POST["userId"]);
  $word=htmlspecialchars($_POST["wordChal"]);
}



$serverName = "localhost";
$db_username = "root";
$db_password = "";
$dbName = "mydb";
$conn = new mysqli($serverName, $db_username, $db_password, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert the challenge into the database
$sql = "INSERT INTO challenges (user_id, word_to_guess) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("is", $userId, $word);
$stmt->execute();

// Feedback
echo "Challenge set for user ID: $userId with the word: $word";
