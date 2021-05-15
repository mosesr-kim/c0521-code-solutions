/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
  } if (length > string.length) {
    return string;
  }
  return newString;
}
