<?php


include("sessionManager.php");

$_SESSION["enter"]=true;

ini_set('display_errors', 1);
error_reporting(E_ALL);

$username = $password = "";
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $username = htmlspecialchars($_POST["username"]);
  $password = htmlspecialchars($_POST["password"]);
}

$serverName = "localhost";
$db_username = "root";
$db_password = "";
$dbName = "mydb";

$conn = new mysqli($serverName, $db_username, $db_password, $dbName);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username,password,id
          FROM users  
          where username=? AND password=?;";

$stmt = $conn->prepare($sql);

$stmt->bind_param("ss", $username, $password);

$stmt->execute();


$result = $stmt->get_result();

if ($result->num_rows > 0) {

  $user = $result->fetch_assoc();

  $_SESSION["user_id"] = $user["id"];

  $_SESSION["username"] = $user["username"];

  $_SESSION["logged in"] = true;

  $_SESSION["start_time"] = time();

  header("Location:../html/Wordle.php");
} else {
  echo "Login failed";
}
