/* exported reverseWords */
function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) {
    string = string + word[i];
  }
  return string;
}
function reverseWords(string) {
  var stringArray = string.split(' ');
  var reverseArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    reverseArray.push(reverseWord(stringArray[i]));
  }
  return reverseArray.join(' ');
}
