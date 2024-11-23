

// Array for each row of keys
const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["\t", "\t", "\t", "Space", "Backspace", "\t", "\t", "\t"],
];

// Reference to the input display
const display = document.getElementById("wordleForm");
const keyboardContainer = document.getElementById("keyboard");

// Generate keyboard rows
rows.forEach((row) => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("keyboard-row");

  row.forEach((key) => {
    const keyButton = document.createElement("button");
    keyButton.classList.add("key");
    keyButton.textContent = key;
    keyButton.setAttribute("data-key", key);

    // Add click event listener for each key
    rowDiv.appendChild(keyButton);
    keyButton.addEventListener("click", handleClick(key));
  });

  keyboardContainer.appendChild(rowDiv);
});

// Function to handle key press
// function handleKey(event) {
//   if (event.key === "Backspace") {
//     display.value = display.value.slice(0, -1);
//     display.tabIndex--;
//   } else if (event.key === "Space") {
//     display.value += " ";
//   } else {
//     display.value += event.key;
//   }
// }

function handleClick(key) {
  if (key === "Backspacce") {
    display.value = display.value.slice(0, -1);
    display.tabIndex--;
  } else if (key === "Space") {
    display.value += " ";
  } else {
    display.value += key;
  }
}
