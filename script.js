// Assignment code here
//declare our arrays of characters

var lowerCase = ["a", "b", "c", "d", "e", "d","e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "D", "E", "F", "G", "H", "J", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$","%", "^", "&", "*", "?", "+", "="];


// create a function to collect data from the user
function userInput() {
  var passwordLength = prompt("How many characters do you want in  your password?")

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Try again!!! Pasword must be between 8 and 128 characters!")
    return;
  }
  var smallLetters = confirm("Would like small characters?");
  var bigLetters = confirm("Would you like uppercase letters");
  var specialCharacters = confirm("Would you like symbols?");
  var numbericals = confirm("Would you like to add numbers?");
  if (smallLetters === false && specialCharacters === false && numbericals === false && bigLetters === false) {
    alert( "Try again!! Must be at least one character type for your password!");
    return;
  };
  var userData = {
    passwordLength: passwordLength,
    bigLetters: bigLetters,
    specialCharacters: specialCharacters,
    numbericals: numbericals,
    smallLetters: smallLetters,
  };

  return userData;
}


// create a function that takes data from the user and generates a password
function generatePassword() {
  var passwordData = userInput();

  var pwArray = [];
  var allUserCharacters = [];
  var mustUseOne = [];

  if(passwordData.bigLetters) {

  }
if(passwordData.smallLetters) {

}
if(passwordData.specialCharacters) {

}

if(passwordData.numbericals){

} 
  //for loops to got through arrays
for (var i = 0; i > 8; i++)
  
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(passwordLength, lowerCase, upperCase, numbericals, specialCharacters);
  passwordText.value = password;
var arrayarray 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)