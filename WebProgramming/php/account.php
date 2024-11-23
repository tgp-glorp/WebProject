<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>


<?php
$username = $password = $email = $cPassword = "";
if ($_SERVER['REQUEST_METHOD'] == "GET") {
  return;
}
$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);
$email = htmlspecialchars($_POST["email"]);

$serverName = "localhost";
$db_username = "root";
$db_password = "";
$dbName = "mydb";

$conn = new mysqli($serverName, $db_username, $db_password, $dbName);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users(username,email,password)
  VALUES(?,?,?)"
;
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $password);
if ($stmt->execute()) {
  echo "Registration successful";
} else {
  echo "Error" . $stmt->error;
}

?>