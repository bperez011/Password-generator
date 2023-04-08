// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar =['!', "@", '#', '$', '%', '^' , '&' , '*', '(' , ')', '-', '_', '+', '=']
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'H', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'V', 'U', 'W', 'X', 'Y' , 'Z']
var lowercaseLetters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm ','n','o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
