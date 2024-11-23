const daysGlobal = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const classes = ["MathEng", "networking", "MoIC", "Web", "Algo", "netLab"];
class Course {
  constructor(name, CRN, instructor, startTime, endTime, daysArray) {
    this.name = name;
    this.CRN = CRN;
    this.instructor = instructor;
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = 0;
    this.daysArray = daysArray;
  }
}

const networking = new Course(
  "Networking",
  "GRT 431",
  "Dr.Ayman Khalil",
  "8:00",
  "9:15",
  ["Monday", "Friday"]
);
const MathEng = new Course(
  "MathEng",
  "GEN350",
  "Dr.Rita Harb",
  "11:00",
  "12:15",
  ["Monday", "Friday"]
);
const netLab = new Course(
  "Networking Lab",
  "GRT 473",
  "Dr.Ayman Khalil",
  "8:00",
  "9:40",
  ["Wednesday"]
);
const Algo = new Course(
  "Algorithmics",
  "GIN 321",
  "Dr.Joseph Zalaket",
  "3:30",
  "4:45",
  ["Tuesday", "Thursday"]
);

const Web = new Course(
  "Web Programming",
  "GIN 446",
  "Dr.Pascal Damien",
  "5:00",
  "6:15",
  ["Tuesday", "Thursday"]
);

const MoIC = new Course(
  "Religion",
  "GERE 210",
  "Dr.Tony Khoury",
  "9:30",
  "10:45",
  ["Tuesday", "Thursday"]
);

const courses = [networking, MoIC, Web, MathEng, netLab, Algo];

function createTable() {
  const tableBody = document.querySelector("#scheduleTable tbody");
  const startHour = 8; // Starting hour (8 AM)
  const endHour = 19; // Ending hour (7 PM, in 24-hour format)

  for (let hour = startHour; hour <= endHour; hour++) {
    // Create a new row for each hour
    const row = document.createElement("tr");

    // Convert hour to 12-hour format with AM/PM
    const period = hour % 12 == 0 ? 12 : hour % 12;

    // Create the time cell
    const timeCell = document.createElement("td");
    timeCell.textContent = period + ":00";
    timeCell.id = period + "t";
    console.log("Created td time ID:" + timeCell.id);
    row.appendChild(timeCell);

    // Create empty cells for each day (Monday to Friday)
    const daysOfTheWeek = ["Mo", "Tu", "We", "Th", "Fr"];
    for (let day = 0; day < 5; day++) {
      const dayCell = document.createElement("td");
      dayCell.textContent = " ";
      dayCell.id = period + daysOfTheWeek[day];
      console.log("Created td ID:" + dayCell.id);
      row.appendChild(dayCell);
    }

    // Append the row to the table body
    tableBody.appendChild(row);
  }
}

function dayChoice(Course) {
  let dayResult = [];
  let i = 0;
  for (let x of daysGlobal) {
    for (let y of Course.daysArray) {
      console.log(y);
      if (x == y) {
        dayResult[i] = x.slice(0, 2);
        console.log(dayResult);
        i++;
      }
    }
  }

  let classSetName = classes[Math.floor(Math.random() * classes.length)];
  for (x of dayResult) {
    tableData = idExtractor(Course, x);
    console.log(classSetName);
    let division = document.createElement("div");
    division.innerHTML =
      Course.name +
      "\n" +
      Course.CRN +
      "\n" +
      "Instructor:" +
      "\n" +
      Course.instructor +
      "\n" +
      Course.startTime +
      "-" +
      Course.endTime;
    division.className = classSetName;
    let time = startTimeCheck(Course.startTime);
    if (time) {
      console.log(time);
      division.style.top = time + "%";
      console.log(division.style.top);
    }
    let duration = durationCheck(Course);
    console.log(duration);
    division.style.height = 100 + durationCheck(Course) + "%";
    console.log(division.style.height);
    tableData.appendChild(division);
  }
}

function idExtractor(Course, day) {
  let x = Course.startTime;
  let hour = x.split(":")[0];
  console.log(hour);
  hour = hour % 12;
  const idFinder = hour + day;
  console.log(idFinder);
  let tableData = document.getElementById(idFinder);
  if (tableData) {
    console.log(tableData.id);
  } else {
    console.log(idFinder + "Not Found");
  }
  return tableData;
}

//This function is used to check the % difference between the initial spot of a td and the one needed for the provided course

function startTimeCheck(Course) {
  let x = Course.split(":")[1];
  if (x == 0) {
    console.log("if works");
    return;
  }
  let difference = (x / 60) * 100;
  return difference;
}

//This function is used to check the % difference between the height of a regular td and the one needed for extra duration

function durationCheck(Course) {
  let duration = Course.duration;
  duration = duration % 60;
  duration = (duration / 60) * 100;
  return duration;
}

function durationCalculate(Course){
    let startArray=Course.startTime.split(":");
    let startHour=startArray[0];
    console.log("Start Hour:"+startHour);
    let startMinutes=startArray[1];
    console.log("Start Minutes:"+startMinutes);
    let endArray=Course.endTime.split(":");
    let endHour=endArray[0];
    console.log("End Hour:"+endHour)
    let endMinutes=endArray[1];
    console.log("End Minutes:"+endMinutes)
    let durationHour=(endHour-startHour)*60;
    let duration=durationHour+(endMinutes-startMinutes);
    console.log("Duration:"+duration);
    Course.duration=duration;
}
document.addEventListener("DOMContentLoaded", function () {
  createTable();
  for (let x of courses) {
    durationCalculate(x);
    dayChoice(x);
  }
});


