function takeWord() {
  const input = document.getElementById("userInput");
  let word = input.value;
  console.log(word);
  word = word.toLowerCase();
  const url = "../php/checkWords.php";

  console.log("Sending request to:", url); // Log the URL

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "../php/checkWords.php", true);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("Response Text:", xhr.responseText); // Log the full response before parsing

      try {
        const response = JSON.parse(xhr.responseText); // Parse the response
        alert(response);
        // Handle the response based on the 'status' field
        if (response.status === "success") {
          console.log("The word exists in the database.");
        } else if (response.status === "not_found") {
          console.log("The word does not exist in the database.");
        } else if (response.status === "error") {
          console.log("Error: " + response.message);
        }
      } catch (e) {
        console.error("Error parsing JSON:", e);
      }
    }
  };
  xhr.send("word=" + encodeURIComponent(word));
}
