let name = "Mikiyas";
const branches = 8;
console.log("My name is " + name);
console.log("Super Skate has " + branches + " branches");
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
