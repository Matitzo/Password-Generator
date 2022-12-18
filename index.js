import data from "./data.json" assert { type: "json" };

const characters = data.characters;

const passwordOne = document.getElementById("btn-1");
const passwordTwo = document.getElementById("btn-2");
const passwordThree = document.getElementById("btn-3");
const passwordFour = document.getElementById("btn-4");
const passwords = [passwordOne, passwordTwo, passwordThree, passwordFour];

const generate = document.getElementById("generate-password");
const length = document.getElementById("input");

function generatePassword() {
  passwords.map((password) => (password.innerText = createPassword()));
}

function createPassword() {
  let password = "";
  for (let i = 0; i < parseInt(length.value); i++) {
    let random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  return password;
}

generate.addEventListener("click", function () {
  generatePassword();
});

passwords.map((password) =>
  password.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
    alert("Copied the text: " + password.innerText);
  })
);
