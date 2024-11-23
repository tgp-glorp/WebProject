<!DOCTYPE html>
<html lang="EN-US">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Worlde</title>
  <link rel="stylesheet" href="../CSS/wordle.css" />
  <link rel="stylesheet" href="../CSS/keyboard.css">
  <script src="../script/keyboard.js" defer></script>
  <script src="../script//Wordle.js" defer></script>
  <script src="../script/sessionManager.js"></script>
</head>

<body>
  <header class="header">
    <div class="header-container">

      <div class="header-logo">
        Rabieh
      </div>


      <nav class="header-nav">
        <a href="index.html"><button>Home</button></a>
        <a href="html/Research.html"><button>Research</button></a>
        <a href="CV_2024-08-20_Rabieh_Hasbani.pdf"><button>CV</button></a>
        <a href="#footer"><button>Contact US</button></a>
        <a href="html/schedule.html"><button>Schedule</button></a>
        <a href="html/CVDesigner.html"><button>CVDesigner</button></a>
        <a href="html/register.html"><button>Register</button></a>
        <a href="html/login.html"><button>Login</button></a>
        <a href="html/Wordle.HTML"><button>Wordle</button></a>
        <a href="challengetest.php"><button>test</button></a>
      </nav>

    </div>


    <div class="header-bottom">
      Welcome to My Website!
    </div>
  </header>
  <?php
  include("../php/sessionManager.php");
  ?>
  <div class="wordle-grid">
    <form id="wordleForm" class="wordle-grid">

    </form>

    <div id="keyboard-container">
      <div id="keyboard"></div>
    </div>
  </div>

</body>

</html>