const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function generatePassword() {
  let num = prompt("How long would you like your password? 8-128 available");
  let typenum = confirm(
    "Would you like numbers in your password? Ok for Yes, Cancel for No"
  );
  let typeupper = confirm(
    "Would you like uppercase letters in your password?Ok for Yes, Cancel for No"
  );
  let typelower = confirm(
    "Would you like lowercase letters in your password? Ok for Yes, Cancel for No"
  );
  let typesymbols = confirm(
    "Would you like symbols in your password? Ok for Yes, Cancel for No"
  );
  let x = [];
  if (typelower === true) {
    x = lowerCasedCharacters;
  }
  let y = [];
  if (typenum === true) {
    y = numericCharacters;
  }
  let z = [];
  if (typesymbols === true) {
    z = specialCharacters;
  }
  let p = [];
  if (typeupper === true) {
    p = upperCasedCharacters;
  }
  const Allarray = x.concat(y, z, p);

  let date = Date.now() % 1000;

  console.log(date);
  let apples = [];
  for (let i = 1; num >= i; i++) {
    let lettersoutput =
      Allarray[(date * Math.floor(Math.random() * (i + 5))) % 85];
    apples.push(lettersoutput);
  }
  return apples.join("");
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
