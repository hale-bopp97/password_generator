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



var lowerRegEx   = /[a-z]/;
var upperRegEx   = /[A-Z]/;
var numericRegEx = /[0-9]/;
var specialRegEx = /[!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~]/;

//unprovided function to create the password...
function generatePassword() {
var strArray      = [];
var passwordArray = [];
  // strArray = [];
  // passwordArray= [];
  length = prompt('Password length?');
  
  //checks for number to be in a range and that is infact a number...
  while ((length < 8 || length > 128) || !numericRegEx.test(length)) {

    length = prompt('Please enter a number between 8 and 128');
  
  }

  //confirm pop-ups for the user to select complexity...
  lower   = confirm('Lowercase characters?');
  upper   = confirm('Uppercase characters?');
  numeric = confirm('Numeric characters?');
  special = confirm('Special characters?');
  
  //puts the different strings into an array to be selected from later...
  appendToStrArray(lower,   lowerStr);
  appendToStrArray(upper,   upperStr);
  appendToStrArray(numeric, numericStr);
  appendToStrArray(special, specialStr);

  // console.log(strArray);
  var finalPass;
  
  //funtion to add strings to the string array used to select characters from...
  function appendToStrArray(a, b) {
    
    if (a) {

      strArray.push(b);
    
    }
  
  }

  //gets a random char from the different sets in the strArray...
  function getRandomFromSet(set) {

    var index = Math.floor(Math.random() * set.length);

    return set[index];

  }

  //assembles the string arra 'passwordArray' that will be used to create 'finalPass' later...
  function buildPassword () {
    
    for (i = 0; i < length; i++) {
      
      var strArrayIndex = Math.floor(Math.random() * strArray.length);
      var randomChar    = getRandomFromSet(strArray[strArrayIndex]);

      passwordArray.push(randomChar);
      
    }


    finalPass = passwordArray.join("");

    //these if statements check to see if 'finalPass' actually meets the criteria set by the user...
    if (lower && !lowerRegEx.test(finalPass)) {
      console.log('needs a lowercase...');
      buildPassword();
    }

    if (upper && !upperRegEx.test(finalPass)) {
      console.log('needs an uppercase...');
      buildPassword();
    }

    if (numeric && !numericRegEx.test(finalPass)) {
      console.log('needs a numeric...');
      buildPassword();
    } 

    if (special && !specialRegEx.test(finalPass)) {
      console.log('needs a special character...');
      buildPassword();
    }

    //TODO replace all the if's with this...
    function checkPatern(boo, pat) {
      if (boo && !pat.test(finalPass)) {
        console.log('failed pattern test...');
        buildPassword();
      }
    }

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

  while(passwordArray.length > 0) {
  passwordArray.pop;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);