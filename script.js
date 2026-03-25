
function formatText(text){
  return text.replace(/\n/g, "<br>");
}

function generateResume(){


let name = document.getElementById('name')?.value || "";
let email = document.getElementById('email')?.value || "";
let phone = document.getElementById('phone')?.value || "";
let address = document.getElementById('address')?.value || "";
let summary = document.getElementById('summary')?.value || "";
let skills = document.getElementById('skills')?.value || "";
let education = document.getElementById('education')?.value || "";
let experience = document.getElementById('experience')?.value || "";
let projects = document.getElementById('projects')?.value || "";
let fontInput = document.getElementById('fontsize');
let fontSize = fontInput ? parseInt(fontInput.value) : 14;
if(isNaN(fontSize)) fontSize = 14;


let contactInfo = [address, email, phone]
  .filter(v => v.trim() !== "")
  .join(" | ");

let html = `
<div style="font-size:${fontSize}px;">
<h1 style="font-size:${fontSize + 14}px;">${name || "Your Name"}</h1>
<p>${contactInfo}</p>
`;

if(summary.trim()){
  html += `<div class="section-title">SUMMARY</div>
           <p>${formatText(summary)}</p>`;
}

// SKILLS
if(skills.trim()){
  html += `<div class="section-title">TECHNICAL SKILLS</div>
           <p>${formatText(skills)}</p>`;
}

// PROJECTS
if(projects.trim()){
  html += `<div class="section-title">PROJECTS</div>
           <p>${formatText(projects)}</p>`;
}

// EDUCATION
if(education.trim()){
  html += `<div class="section-title">EDUCATION</div>
           <p>${formatText(education)}</p>`;
}

// EXPERIENCE
if(experience.trim()){
  html += `<div class="section-title">EXPERIENCE</div>
           <p>${formatText(experience)}</p>`;
}

html += `</div>`;

document.getElementById('resume').innerHTML = html;
}


function downloadPDF(){
  generateResume();
  setTimeout(function(){
    window.print();
  }, 500);
}

