<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <![endif]-->
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>FillWords</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="">
</head>

<body>
  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
  <?php

  $serverName = "localhost";
  $db_username = "root";
  $db_password = "";
  $dbName = "mydb";

  $conn = new mysqli($serverName, $db_username, $db_password, $dbName);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


  $file = fopen("words.txt", "r");

  if ($file) {
    $line=fgets($file);
    while (!($line == false)) {
      $word = trim($line);
      if (strlen($word) == 5) {
        echo "Inserting:" . $word ."";
        $sql = "
          INSERT into words
          Values(?)
          ";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $word);
        $stmt->execute();
      }
      $line=fgets($file);
    }
    fclose($file);
    echo "FILLED SUCCESSFULLY";
  }
  else{
    echo "NUH UH";
  }
  $conn->close();
  ?>
  <script src="" async defer></script>
</body>

</html>