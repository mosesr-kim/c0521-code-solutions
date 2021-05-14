/* exported capitalize */
function capitalize(word) {
  var string = '';
  var char = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      char = word[i].toUpperCase();
      string = string + char;
    } else {
      char = word[i].toLowerCase();
      string = string + char;
    }
  }
  return string;
}
