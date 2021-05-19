/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var first = string[secondIndex];
  var second = string[firstIndex];
  for (var i = 0; i < string.length; i++) {
    if (firstIndex === i) {
      newString += first;
    } else if (secondIndex === i) {
      newString += second;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
