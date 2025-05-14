const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
document.body.appendChild(footer);

const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Volha Miranava ${thisYear}`;
footer.appendChild(copyright);


const skills = ["HTML", "CSS", "JavaScript", "Figma", "GitHub"];

const skillsSection = document.getElementById("Skills");
const skillsList = document.createElement("ul");
skillsList.classList.add("skills-list");
skillsSection.appendChild(skillsList);

for (let i = 0; i < skills.length; i++) {
  const skillItem = document.createElement("li");
  skillItem.innerText = skills[i];
  skillsList.appendChild(skillItem);
}
