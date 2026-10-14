let name = "Mikiyas";
const branches = [
  "Adama",
  "Adama Bole",
  "Bishoftu",
  "Shashamane",
  "Hawassa",
  "Jigjiga",
  "Hargeisa",
  "Furi",
];
const container = document.getElementById("branches");
branches.forEach(function (branch) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = branch;
  container.appendChild(card);
});
console.log("My name is " + name);
console.log("Super Skate has " + branches.length + " branches");
let age = 26;
console.log("I am " + age + " years old.");
const button = document.getElementById("greetBtn");
const message = document.getElementById("message");
button.addEventListener("click", function () {
  if (message.textContent === "") {
    message.textContent = "Welcome to Super Skate!";
  } else {
    message.textContent = "";
  }
});
function addCard(name) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = name;
  container.appendChild(card);
}
const addBtn = document.getElementById("addBtn");
const branchInput = document.getElementById("branchInput");
addBtn.addEventListener("click", function () {
  const newName = branchInput.value;
  if (newName !== "") {
    addCard(newName);
    branchInput.value = "";
  }
});
