// needed Variables
var generateBtn = document.querySelector("#generate");
var specialChar =['!', "@", '#', '$', '%', '^' , '&' , '*', '(' , ')', '-', '_', '+', '=']
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'H', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'V', 'U', 'W', 'X', 'Y' , 'Z']
var lowercaseLetters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm ','n','o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
var numbers = ['1' , '2', '3', '4' , '5', '6', '7', '8', '9', '0']

//choices of how long and what it will contain
function passwordOptions(){
  choices = [] 
  passwordLength = window.prompt("How long would you like your password to be (between 8-128)?")
  var includeUpper = window.confirm("Would you like your password to have upper cased letters?")
  if(includeUpper) {
    choices= choices.concat(capitalLetters)
  }
  var includeLower = window.confirm ("Would you like your password to have lower cased letters?")
  if (includeLower) {
    choices= choices.concat(lowercaseLetters)
  }
  var includeNumbers = window.confirm ("Would you like for your password to have numbers?")
  if (includeNumbers) {
    choices= choices.concat(numbers)
  }
  var includeSpecial = window.confirm("Would you like your password to have special characters?")
  if (includeSpecial) {
    choices= choices.concat(specialChar)
  }
}  


//function to generate password
function generatePassword (){
  passwordOptions()
  var passArray = []

  for (var i = 0; i <passwordLength; i++){
    var randomIndex = Math.floor(Math.random()* choices.length);
    password = password + (choices[randomIndex]);
  }
  return password;

}

// var to generateBtn 
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
