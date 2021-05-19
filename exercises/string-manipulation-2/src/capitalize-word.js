/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newString = newString + word[i].toLowerCase();
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}
