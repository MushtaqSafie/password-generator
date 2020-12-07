// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLengthEl = document.querySelector("#passlength");
var passChar = ""

var lowerCasePrompt = confirm("Would you like to have lowercase alphabet within your password?");
var upperCasePrompt = confirm("Would you like to have uppercase alphabet within your password?");
var speciCharPrompt = confirm("Would you like to have special characters within your password?");

if (lowerCasePrompt) {
  passChar += "abcdefghijklmnopqrstuvwxyz";
} 
if (upperCasePrompt) {
  passChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (speciCharPrompt) {
  passChar += "!#$%&()*/-+/:;<>=?@~";
}
if (lowerCasePrompt == false && upperCasePrompt == false && speciCharPrompt == false) {
  alert("Sorry you can't generate a password without any of these. Try Again");
  location.reload();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ---------------------------------------------------- //
// Password generater
function generatePassword() {
    // if passLengthEl.value is equal to "" then generate a 10 digit pass
    if (passLengthEl.value === "") {
      var newpass = "";
      for (var i = 0; i < 8; ++i) {
        newpass += passChar.charAt(Math.floor(Math.random() * passChar.length));
      }
      return newpass;
    } else if (passLengthEl.value < 8) {
      return newpass = "WARNING: less than 8 characters is not being consider as a strong PassWorrd.  \n \n It's recommended to have between 8 - 128 characters.";
    }
    // if passLengthEl.value is equal or smaller than 250 then generate as passLengthEl.value
    else if (passLengthEl.value <= 128) {
      var newpass = "";
      for (var i = 0; i < passLengthEl.value; ++i) {
        newpass += passChar.charAt(Math.floor(Math.random() * passChar.length));
      }
      return newpass;  
    } 
    // else alert "Oh-no your password length is very long. You might never remeber that."
    else {
      return newpass = "WARNING: Oh-no your password length is very long. You might never remember that. \n \n It's recommended to have between 8 - 128 characters.";
    }  


  }