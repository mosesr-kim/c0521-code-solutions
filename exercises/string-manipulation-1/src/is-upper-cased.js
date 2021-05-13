/* exported isUpperCased */
function isUpperCased(word) {
  var truth = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      truth = true;
    } else {
      truth = false;
    }
  }
  return truth;
}
