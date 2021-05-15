/* exported firstChars */
/* input: number, string
-output: string
-create a storage for new string
-add each character to storage space only for the length amount of times
-return new string */

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (i < string.length) {
      newString += string[i];
    }
  }
  return newString;
}
