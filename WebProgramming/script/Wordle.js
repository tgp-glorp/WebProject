const dictionary = ["Pride", "Dress", "Press", "Poker", "Break"];
const disp = document.getElementById("wordleForm");
const gridnumbers = 31;
let word = dictionary[Math.floor(Math.random() * dictionary.length)];
let tabIndex = 1;
let rowNb = 0;
function worldeCreater() {
  const grid = document.querySelector("#wordleForm");
  //Creating the grids
  let i = 0;
  for (let x = 1; x < gridnumbers; x++) {
    const y = document.createElement("input");
    y.type = "text";
    y.style.height = 60 + "%";
    y.style.width = 60 + "%";
    y.id = "b" + x;
    y.placeholder = y.id;
    y.maxLength = 1;
    y.className = "wordle-tile";
    if (x > 5) {
      y.disabled = true;
    }
    grid.appendChild(y);
  }
  const firstInput = document.getElementById("b1");
  firstInput.focus();
}

function handleKey(event) {
  console.log(tabIndex, "I'm inside handlekey");
  if (event.key === "Backspace") {
    disp.value = disp.value.slice(0, -1);
  } else if (event.key === "Space") {
    disp.value += " ";
  } else {
    disp.value += event.key;
    console.log(disp.value);
  }
}

function moveToNext(event) {
  console.log("Event is working");
  handleKey(event);
  let nextField;
  if (event.key === "ArrowLeft" || event.key === "Backspace") {
    if (tabIndex === 1) {
      return;
    }
    tabIndex--;
    setTimeout(() => {
      const prevField = document.getElementById(`b${tabIndex}`);
      prevField.focus(); // Focus on previous field after tabIndex update
    }, 0); // Delay focus to let handleKey finish
    return;
  }
  if (event.key === "Enter") {
    return;
  }
  if (tabIndex == gridnumbers - 1) {
    return;
  }
  if (tabIndex % 5 == 0 && event.key !== "ArrowRight") {
    return;
  }
  tabIndex++;
  setTimeout(() => {
    const nextField = document.getElementById(`b${tabIndex}`);
    nextField.focus();
  }, 0); // Delay focus to let handleKey finish
}

async function inputManager(event) {
  if (event.key !== "Enter") {
    console.log("NOTENT");
    return;
  }
  if (tabIndex % 5 > 0) {
    console.log("HUH");
    return;
  }
  let u = 0;
  let y = 0;
  let x = 1;
  let z = 1;
  x += rowNb;
  let userInput = "";
  let inputId = [];
  while (u != 5) {
    let block = document.getElementById(`b${x}`);
    console.log(block.id);
    inputId[u] = block.id;
    userInput += block.value;
    u++;
    x++;
  }
  const check = await takeWord(userInput);
  if (!check) {
    alert("Word doesn't exist");
    return;
  }
  x =1 + rowNb;
  while (y != 5) {
    let block = document.getElementById(`b${x}`);
    block.disabled = true;
    let blockafter = document.getElementById(`b${tabIndex + z}`);
    if(blockafter){
      blockafter.disabled = false;
    }
    console.log(block.id);
    console.log(`I'm X ${x}`);
    y++;
    x++;
    z++;
  }
  console.log(userInput, "I'm userInput");
  rowNb = rowNb == 0 ? 5 : rowNb + 5;
  console.log(rowNb);
  gameLogic(userInput, inputId);
}

function gameLogic(userInput, inputId) {
  word = word.toUpperCase();
  let similar = "";
  userInput = userInput.toUpperCase();
  console.log(userInput);
  if (userInput == word) {
    alert("You win");
    const grid = document.querySelector("#worldeForm");
    //grid.disabled=true;
  }
  let map = new Map();
  let key;
  for (let x of word) {
    key = x;
    while (map.has(key)) {
      key += 1;
    }
    map.set(key, x);
  }
  for (let x of map) {
    console.log(x, "of map");
  }
  for (let y of userInput) {
    if (Array.from(map.values()).includes(y)) {
      similar += y;
      for (let [key, value] of map) {
        if (value == y) {
          map.delete(key);
          break;
        }
      }
    }
  }
  console.log(similar, "I'm similar");
  let dupMap = new Map();
  let dupCheck = 0;
  for (let x of similar) {
    let index = userInput.indexOf(x);
    if (dupMap.has(index)) {
      dupCheck++;
      index = handleDup(dupCheck, userInput, x);
    }
    dupMap.set(index, true);

    let ID = inputId[index];

    if (!ID) {
      return;
    }

    const elem = document.getElementById(ID);

    console.log(`I'm ID:${ID}`);

    if (word.indexOf(x) == userInput.indexOf(x)) {
      elem.classList.add("green");
    } else {
      elem.classList.add("yellow");
    }
  }
}

function handleDup(iteration, userInput, value) {
  let indices = [];
  let n = 0;
  for (let x = 0; x < userInput.length; x++) {
    if (userInput[x] == value) {
      console.log(x);
      indices[n] = x;
      console.log(indices[n], "indices[n]", n);
      n++;
    }
  }
  console.log(indices[iteration], "I'm the dup index");
  return indices[iteration];
}

function takeWord(word) {
  return new Promise((resolve, reject) => {
    word = word.toLowerCase();
    console.log(word);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "../php/checkWords.php", true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("Response Text:", xhr.responseText); // Log the full response before parsing
        try {
          const response = JSON.parse(xhr.responseText); // Parse the response
          // Handle the response based on the 'status' field
          if (response.status === "success") {
            console.log("The word exists in the database.");
            resolve(true);
          } else if (response.status === "not_found") {
            console.log("The word does not exist in the database.");
            resolve(false);
          } else if (response.status === "error") {
            console.log("Error: " + response.message);
            resolve(false);
          }
        } catch (e) {
          resolve(false);
        }
      }
    };
    xhr.send("word=" + encodeURIComponent(word));
  });
}

addEventListener("DOMContentLoaded", worldeCreater());

addEventListener("keydown", (event) => moveToNext(event));

addEventListener("keydown", (event) => inputManager(event));
