// Assignment code here

// References to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6","7","8","9]"]
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "<", ">", "?", "/", ";", ":", "'","{", "}", "[", "]", "|"]
var tracker = 0;
var storage = [];

// Parameters for Password to identify password length
function Input() {
  userInput = [];
  passwordLength = parseInt(prompt("How many characters would you like for your password?", "8-128"));
  console.log(passwordLength)
  if ((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Choose password length that is a minimum of 8 characters, but no more than 128");
    return false; 
  }
  var passwordOutput = NextPrompt(passwordLength)
  console.log(passwordOutput)
  return passwordOutput
}
// Password framing questions to ask so we can generate password according to character confirmations
function NextPrompt(lengthPassword) {

  var upperCase = confirm("Would you like to use Upper-case lettering?");

  var lowerCase = confirm("Would you like to use Lower-case lettering?");

  var numbers = confirm("Would you like to use Numbers?");

  var specials = confirm("Would you like to use special characters?");

  console.log(userInput)

  if (upperCase == true){
    tracker++
    console.log(tracker)
    userInput = userInput.concat(upperCharacters)
  }

  if (lowerCase == true){
    tracker++
    console.log(tracker)
    userInput = userInput.concat(lowerCharacters)
  }

  if (numbers == true){
    tracker++
    console.log(tracker)
    userInput = userInput.concat(numberCharacters)
  }

  if (specials == true){
    tracker++
    console.log(tracker)
    userInput = userInput.concat(specialCharacters)
  }
   console.log(tracker) //5 We want to warn user to choose correct input if they do not enter any characeters
  if (tracker == 0) {
    alert("You must return and choose a character");
    return false;

  }
  var userPassword = "";

  for (i=0; i<lengthPassword; i++) {
    var charactersChosen = Math.floor(Math.random() * userInput.length);
    userPassword += userInput[charactersChosen];
  }
  console.log(userPassword)
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var inputResults = Input();
  var password = inputResults
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

