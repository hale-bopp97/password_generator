// Assignment code here

//vars for setting password criteria based on user inputs...
var length  = 0;
var lower   = false;
var upper   = false;
var numeric = false;
var special = false;

//strings to pick characters from...
var lowerStr   = 'abcdefghijklmnopqrstuvwxyz';
var upperStr   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericStr = '1234567890'; 
var specialStr = '!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

var strArray = [];

var lowerWasUsed   = false;
var upperWasUsed   = false;
var numericWasUsed = false;
var specialWasUsed = false;

var passwordArray = [];

// console.log(lowerStr.length + ' ' + upperStr.length + ' ' + numericStr.length + ' ' + specialStr.length);

//unprovided function to create the password...
function generatePassword() {

  length  = prompt('Password length?');
  
  while (length < 8 || length > 128) {
    length = prompt('Please enter a number between 8 and 128');
  }

  

  lower   = confirm('Lowercase characters?');
  upper   = confirm('Uppercase characters?');
  numeric = confirm('Numeric characters?');
  special = confirm('Special characters?');
  
  appendToStrArray(lower,   lowerStr);
  appendToStrArray(upper,   upperStr);
  appendToStrArray(numeric, numericStr);
  appendToStrArray(special, specialStr);

  console.log(strArray);
  var finalPass;
  
  function appendToStrArray(a, b) {
    
    if (a) {

      strArray.push(b);
    
    }
  
  }

  function getRandomFromSet(set) {

    var index = Math.floor(Math.random() * set.length);

    return set[index];
  }

  function buildPassword () {
    

    
    for (i = 0; i < length; i++) {
      
      var strArrayIndex = Math.floor(Math.random() * strArray.length);
      
      var randomChar = getRandomFromSet(strArray[strArrayIndex])

      passwordArray.push(randomChar);
      
    }

    finalPass = passwordArray.join("");
    console.log(finalPass);
    
  }
  
  buildPassword();

  return finalPass;

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