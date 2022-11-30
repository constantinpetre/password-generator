// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

var passwordLength;
var useNumericCharacters;
var useLowerCasedCharacters;
var useUpperCasedCharacters;
var useSpecialCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    "Please enter the number of characters you want for you new password.  It must be more than 10 but less than 64."
  );
  // To-do range check passwordLength here
  useNumericCharacters = confirm("Do you want numbers in your password?");
  useLowerCasedCharacters = confirm("Do you want lowercases in your password?");
  useUpperCasedCharacters = confirm("Do you want uppercases in your password?");
  useSpecialCharacters = confirm(
    "Do you want special characters in your password?"
  );
  // To-do check at least one character type is selected
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var randomPasswordGenerated = "";
  var characters = [];

  if (useNumericCharacters === true) {
    randomPasswordGenerated += getRandom(numericCharacters);
    characters = characters.concat(numericCharacters);
    passwordLength--;
  }
  if (useLowerCasedCharacters === true) {
    randomPasswordGenerated += getRandom(lowerCasedCharacters);
    characters = characters.concat(lowerCasedCharacters);
    passwordLength--;
  }
  if (useUpperCasedCharacters === true) {
    randomPasswordGenerated += getRandom(upperCasedCharacters);
    characters = characters.concat(upperCasedCharacters);
    passwordLength--;
  }
  if (useSpecialCharacters === true) {
    randomPasswordGenerated += getRandom(specialCharacters);
    characters = characters.concat(specialCharacters);
    passwordLength--;
  }
  for (; passwordLength > 0; passwordLength--) {
    randomPasswordGenerated += getRandom(characters);
  }
  return randomPasswordGenerated;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
