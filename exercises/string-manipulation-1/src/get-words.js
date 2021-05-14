/* exported getWords */
function getWords(string) {
  var newArray = [];
  if (string.length > 0) {
    newArray = string.split(' ');
  }
  return newArray;
}
