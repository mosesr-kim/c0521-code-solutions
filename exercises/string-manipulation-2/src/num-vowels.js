/* exported numVowels */
/* input - string --- output - number
-create counter for number
-check each character to see if it is a vowel
-if character is a vowel, increase counter by 1
-return counter */
function numVowels(string) {
  var counter = 0;
  var newString = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    if ((newString[i] === 'A') ||
      (newString[i] === 'E') ||
      (newString[i] === 'I') ||
      (newString[i] === 'O') ||
      (newString[i] === 'U')) {
      counter++;
    }
  }
  return counter;
}
