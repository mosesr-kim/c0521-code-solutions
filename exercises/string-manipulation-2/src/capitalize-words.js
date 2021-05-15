/* exported capitalizeWords */
/* input - string
-output - string
-create storage space for word
-create storage space for output
-look at each character in string
-capitalize first character
-lowercase next character
if character is space :
-capitalize word with capitalizeWord();
-add word to output storage space
-clear word storage space
-return output storage space */
function capitalizeWord(word) {
  var newString = '';
  newString = newString + word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (typeof (newString) === 'string') {
      newString = newString + word[i].toLowerCase();
    }
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}

function capitalizeWords(string) {
  var word = '';
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (!(string[i] === ' ')) {
      word += string[i];
    } else {
      word += string[i];
      word = capitalizeWord(word);
      output += word;
      word = '';
    }
  }
  word = capitalizeWord(word);
  output += word;
  return output;
}
