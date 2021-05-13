/* exported isLowerCased */
function isLowerCased(word) {
  var truth = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === word[i]) {
      truth = true;
    } else {
      truth = false;
      break;
    }
  }
  return truth;
}
