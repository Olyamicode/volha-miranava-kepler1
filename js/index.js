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
const messageForm = document.forms.leave_message;

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> wrote: ${usersMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();

    // hide #messages if list is empty
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //  show messages if hidden
  messageSection.style.display = "block";

  messageForm.reset();
});