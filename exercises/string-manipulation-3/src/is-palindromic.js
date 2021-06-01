/* exported isPalindromic */
function isPalindromic(string) {
  var truth = true;
  var fChar = '';
  var rChar = '';
  for (var i = 0; i < string.length; i++) {
    fChar = string[i];
    rChar = string[string.length - 1 - i];
    if (fChar === ' ') {
      fChar = string[i - 1];
    }
    if (rChar === ' ') {
      rChar = string[string.length - 2 - i];
    }
    if (fChar !== rChar) {
      return false;
    }
  }
  return truth;
}
