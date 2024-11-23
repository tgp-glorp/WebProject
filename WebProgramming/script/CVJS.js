const skillsList = [];

function addSkill() {
  const skillName = document.getElementById("skillName").value;
  const skillLevel = document.getElementById("skillLevel").value;

  if (skillName) {
    //filling the array by the newly added skill
    skillsList.push({ name: skillName, level: skillLevel });

    //To change the html element
    updateSkillsDisplay();

    //To make input field empty again
    document.getElementById("skillName").value = "";
  }
}

function updateSkillsDisplay() {
  const skillsDisplay = document.getElementById("skillsDisplay");
  skillsDisplay.innerHTML = "";

  // Looping through the skills array using for each

  skillsList.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.innerHTML = `
          ${skill.name} <span class="skill-level">(${getSkillLevelText(
      skill.level
    )})</span>
      `;
    skillsDisplay.appendChild(skillItem);
  });
}

function getSkillLevelText(level) {
  if (level === "30") return "Beginner";
  if (level === "60") return "Intermediate";
  if (level === "90") return "Expert";
  return "Master";
}
function generateCV() {
  //For taking user input from form in CVDes.html
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const school = document.getElementById("school").value;
  const degree = document.getElementById("degree").value;
  const graduation = document.getElementById("graduation").value;
  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("company").value;
  const jobEnd = document.getElementById("jobEnd").value;
  const jobStart = document.getElementById("jobStart").value;
  const jobDescription = document.getElementById("jobDescription").value;
  const summary = document.getElementById("summary").value;
  const skillBars = skillsList
  .map(
    (skill) => `
    <div class="skill-bar">
    <div class="bar" style="width: ${skill.level}%">${skill.name}</div>
    </div>
    `
  )
  .join();
  
  const clear=document.getElementById("formCont");
  clear.innerHTML="";
  const cvTemplate = `
  <div class="cv-card">
  <section class="cv-header">
                <h1>${name}</h1>
                <p>${title}</p>
                </section>
                
                <section class="cv-section">
                <h3>Summary</h3>
                <p>About me:${summary}</p>
                </section>
                
                <section class="cv-section">
                <h3>Skills</h3>
                ${skillBars}
                </section>
                
                <main>
                
                <section>
                <h3>Education</h3>
                <p>${school} - ${degree}</p>
                <p>Graduation Year:${graduation}</p>
                </section>
                
                <section>
                <h3>Experience</h3>
                <p>${title} at ${company}</p>
                
                <p>Years of work:<br>
                From${jobStart} To ${jobEnd}
                </p>
                
                <p>My job:${jobDescription}</p>
                </section>
                
          <section>
              <h3>Contact</h3>
              <p>Phone: ${phone}</p>
              <p>Email:<a href="MailTo:${email}" > ${email}</a></p>
              <p>LinkedIn:${linkedin}</p>
          </section>

      </main>    `;

  document.getElementById("cvOutput").innerHTML = cvTemplate;
}
