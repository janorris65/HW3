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
  // These set the conditions for array concat using prompt confirm. q,r,s,t correct for 'No' implication in oneOfEach function

  let q, r, s, t;
  let x = [];
  if (typelower === true) {
    x = lowerCasedCharacters;
    q = 0;
  } else {
    q = 1;
  }
  let y = [];
  if (typenum === true) {
    y = numericCharacters;
    r = 0;
  } else {
    r = 1;
  }
  let z = [];
  if (typesymbols === true) {
    z = specialCharacters;
    s = 0;
  } else {
    s = 1;
  }
  let p = [];
  if (typeupper === true) {
    p = upperCasedCharacters;
    t = 0;
  } else {
    t = 1;
  }
  let numBe = Number(num) + q + r + s + t;
  const Allarray = x.concat(y, z, p);
  //Correction of effect of using linear "for" loop method to create string array on random generator using "date" and "i+5"
  let date = Date.now() % 1000;

  console.log(date);
  // if statement for outside 8 and 128
  if (num < 8 || num > 128) {
    return "Must be between 8 and 128";
  }
  //block of code for creating random array
  let apples = [];
  for (let i = 1; numBe >= i; i++) {
    let lettersoutput =
      Allarray[(date * Math.floor(Math.random() * (i + 5))) % Allarray.length];
    apples.push(lettersoutput);
  }
  // function to guarantee one of each selected in code
  function oneOfEach(Fruit) {
    Fruit[Math.floor(Math.random() * apples.length)] =
      x[Math.floor(Math.random() * upperCasedCharacters.length)];
    Fruit[Math.floor(Math.random() * apples.length)] =
      y[Math.floor(Math.random() * numericCharacters.length)];
    Fruit[Math.floor(Math.random() * apples.length)] =
      z[Math.floor(Math.random() * specialCharacters.length)];
    Fruit[Math.floor(Math.random() * apples.length)] =
      p[Math.floor(Math.random() * upperCasedCharacters.length)];
  }
  oneOfEach(apples);
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
