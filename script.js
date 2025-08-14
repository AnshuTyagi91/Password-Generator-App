const passwordDisplay = document.getElementById("password-display");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Theme Toggle
themeSwitch.addEventListener("change", () => {
  body.classList.toggle("dark", themeSwitch.checked);
});

// Password Generator
function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";
  if (uppercase.checked) characters += upper;
  if (lowercase.checked) characters += lower;
  if (numbers.checked) characters += number;
  if (symbols.checked) characters += symbol;

  if (characters === "") {
    passwordDisplay.value = "Select options!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordDisplay.value = password;
}

// Event Listeners
generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) {
    navigator.clipboard.writeText(passwordDisplay.value).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy", 1500);
    });
  }
});

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});
