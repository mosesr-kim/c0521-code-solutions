/* exported isLowerCased */
function isLowerCased(word) {
  var truth = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[i]) {
      truth = false;
    }
  }
  return truth;
}
