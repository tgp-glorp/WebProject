document.addEventListener("DOMContentLoaded", () => {
  // Get the button
  const backToTopBtn = document.getElementById("back-to-top");

  // Show the button when scrolling down
  window.onscroll = function () {
      if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
      ) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  };

  // Scroll to the top when clicking the button
  backToTopBtn.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
});


function goToResearch() {
  window.location.href = "Research.html";
}

function showDisclaimer() {
  var disclaimer = document.getElementById("disclaimer");
  if (disclaimer.style.display === "none" || disclaimer.style.display === "") {
    disclaimer.style.display = "flex";
  } else {
    disclaimer.style.display = "none";
  }
}

/*
 // Define your class schedule
 const scheduleData = {
  Monday: [
    { time: "8:00 AM", course: "GRT 431", instructor: "Dr.Ayman Khalil", room: "Room H004", duration: 75 },
    { time: "11:00 AM", course: "GEN 350", instructor: "Dr.Rita Harb", room: "Room H008", duration: 75 }
  ],
  Tuesday: [
    { time: "9:30 AM", course: "GERE 210", instructor: "Pere Tony Khoury", room: "Room B308", duration: 75 },
    { time: "3:30 PM", course: "GIN 321", instructor: "Dr.Joseph Zalaket", room: "Room H005", duration: 75 },
    { time: "5:00 PM", course: "GIN 446", instructor: "Dr.Pascal Damien" , room: "Room H104", duration: 75 }
  ],
  Wednesday: [
    { time: "8:00 AM", course: "GRT 473", instructor: "Dr.Ayman Khalil", room: "Room HS106", duration: 100 },
  ],
  Thursday: [
    { time: "9:30 AM", course: "GERE 210", instructor: "Pere Tony Khoury", room: "Room B308", duration: 75 },
    { time: "3:30 PM", course: "GIN 321", instructor: "Dr.Joseph Zalaket", room: "Room H005", duration: 75 },
    { time: "5:00 PM", course: "GIN 446", instructor: "Dr.Pascal Damien" , room: "Room H104", duration: 75 }
  ],
  Friday: [
    { time: "8:00 AM", course: "GRT 431", instructor: "Dr.Ayman Khalil", room: "Room H004", duration: 75 },
    { time: "11:00 AM", course: "GEN 350", instructor: "Dr.Rita Harb", room: "Room H008", duration: 75 }
  ]
};

function generateSchedule() {
  const tbody = document.querySelector("#schedule tbody");

  // Define time slots in 30-minute intervals
  const timeSlots = [
      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", 
      "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
      "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", 
      "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"
  ];

  // Create time slot rows
  timeSlots.forEach(time => {
      const row = document.createElement("tr");
      const timeCell = document.createElement("td");
      timeCell.textContent = time;
      row.appendChild(timeCell);

      // Iterate through each day of the week
      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].forEach(day => {
          let classBlock = null;

          // Check if there's a class at this time slot
          const classAtTime = scheduleData[day]?.find(classInfo => {
              const classStart = convertToMinutes(classInfo.time);
              const classEnd = classStart + classInfo.duration;
              const slotStart = convertToMinutes(time);
              const slotEnd = slotStart + 30; // Each slot is 30 minutes

              // Check for overlap: 
              return (slotStart < classEnd && slotEnd > classStart);
          });

          // If there's a class, create a block
          if (classAtTime) {
              const durationSlots = classAtTime.duration ; // Calculate how many 30-min slots the class occupies
              classBlock = document.createElement("td");
              classBlock.colSpan = durationSlots; // Set colspan based on the duration
              classBlock.textContent = `${classAtTime.course} (${classAtTime.instructor}, ${classAtTime.room})`;
              classBlock.className = "class-block";
          }

          // If no class, create an empty cell
          if (!classBlock) {
              classBlock = document.createElement("td");
          }

          row.appendChild(classBlock);
      });

      tbody.appendChild(row);
  });
}
// Helper function to convert time to minutes for easier comparison
function convertToMinutes(time) {
    const [hour, minute] = time.split(":");
    const isPM = time.includes("PM");
    let totalMinutes = parseInt(hour) % 12 * 60 + parseInt(minute);
    if (isPM) totalMinutes += 12 * 60;
    return totalMinutes;
}

// Call the function to generate the schedule on page load
document.addEventListener("DOMContentLoaded", generateSchedule);
*/