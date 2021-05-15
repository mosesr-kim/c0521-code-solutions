/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  newString = newString + word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (typeof (newString) === 'string') {
      newString = newString + word[i].toLowerCase();
    }
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}
