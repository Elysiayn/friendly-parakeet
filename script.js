// Assignment code here
var generatePassword = function () {
  // asking for the password length: 8-128
  var passLength = prompt('Please enter a numberical value between "8" and "128" in order to determine the length of your password.');
  var passLength = parseInt(passLength);
  console.log('Password length is currently set to' + passLength + 'characters long.');

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    return generatePassword();
  }
  //creates a password based on inputs.
  var passSet = passSpecifics();
  console.log(passSet)
  var inputsPassword = "";
  for (var i = 0, n = passSet.length; i < passLength; i++) {
    inputsPassword += passSet[Math.floor(Math.random() * n)];
  }
  console.log("The generated password is as follows" + inputsPassword);
  return inputsPassword;
}

// asking for desired password specifics. 
var passSpecifics = function () {
  // asking if user wishes to include lower case letters in password. 
  var passLower = confirm('Please select "Ok" if you wish to include lower case letters in your password and "Cancel" if you wish to omit lower chase characters.');
  //code for Ok on lower case characters
  if (!passLower) {
    passLower = "";
  }
  //code for Cancel on lower case characters
  else {
    passLower = "abcdefghijklmnopqrstuvwxyz";
  }
  // asking if user wishes to include upper case letters in password.
  var passUpper = confirm('Please select "Ok" if you wish to include upper case letters in your password and "Cancel" if you wish to omit upper case characters.');
  //code for Ok on upper case characters
  if (!passUpper) {
    passUpper = "";
  }
  //code for cancel on upper case characters
  else {
    passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //asking if user wishes to include numerical characters in password.
  var passNumbers = confirm('Please select "Ok" if you wish to include numerical characters in your password and "Cancel" if you wish to omit numerical characters.');
  //code for Ok on numerical characters.
  if (!passNumbers) {
    passNumbers = "";
  }
  //code for cancel on numerical characters.
  else {
    passNumbers = "1234567890";
  }
  //asking if user wishes to include special characters in password.
  var passSpecial = confirm('Please select "Ok" if you wish to include special characters in your password and "Cancel" if you wish to omit special characters.');
  //code for ok on special characters.
  if (!passSpecial) {
    passSpecial = "";
  }
  //code for cancel on special characters.
  else {
    passSpecial = "!@#$%^&*()_+?><}{][-";
  }
  //combines selected specifications for password
  var passString = passLower + passUpper + passNumbers + passSpecial
  //Ensures at least one specification is made.
  if (passString.length > 0) {
    console.log("Password Specifications are" + passString);
    return passString;
  }
  // if no specification is made then prompt to do so is activated.
  else {
    window.alert("Please ensure to select one password specification at the minimum.");
    return passString();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);