
let inactiveLimit=120;//2 minutes
let inactiveTimer;



function timeLogger(){
  console.log("Im here");
  clearTimeout(inactiveTimer); //reset timer
  inactiveTimer=setTimeout(logOut,inactiveLimit*1000); //new timer , setTimeout is in ms => *1000
}

function logOut(){
  console.log("I'm here");
  var xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/logout.php', true); // PHP file to destroy the session
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        window.location.href = '../html/login.html';
      }
    };
    xhr.send();
}

addEventListener("DOMContentLoaded",timeLogger());
addEventListener("mousemove",timeLogger());
addEventListener("keydown",timeLogger());