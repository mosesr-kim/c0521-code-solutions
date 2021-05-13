/* exported reverseWord */
function reverseWord(word) {
  var string = '';
  for (var i = word.length; i > 0; i--) {
    string = string + word[i - 1];
  }
  return string;
}
