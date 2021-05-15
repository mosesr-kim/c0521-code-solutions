/* exported numVowels */
/* input - string --- output - number
-create counter for number
-check each character to see if it is a vowel
-if character is a vowel, increase counter by 1
-return counter */

function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if ((string[i].toUpperCase() === 'A') ||
      (string[i].toUpperCase() === 'E') ||
      (string[i].toUpperCase() === 'I') ||
      (string[i].toUpperCase() === 'O') ||
      (string[i].toUpperCase() === 'U')) {
      counter++;
    }
  }
  return counter;
}
