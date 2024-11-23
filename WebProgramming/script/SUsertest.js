let word="";

function test() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/testingReceive.php", true); 
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(word);
    }
  };
  xhr.send("word=" + encodeURIComponent(word));
}


addEventListener("submit",test());