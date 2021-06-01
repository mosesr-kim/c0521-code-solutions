/* exported titleCase */
function capitalizeWord(word) {
  var newString = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newString = newString + word[i].toLowerCase();
  }
  if (newString === 'Javascript:') {
    newString = 'JavaScript:';
  } else if (newString === 'In-depth') {
    newString = 'In-Depth';
  } else if (newString === 'Api') {
    newString = 'API';
  }

  return newString;
}
function titleCase(string) {
  // debugger;
  var word = '';
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    word += string[i];
    if (string[i] === ' ') {
      if (word.length > 4) {
        var capitalizedWord = capitalizeWord(word);
        newString += capitalizedWord;
        word = '';
      }
      newString += word;
      word = '';
    }
  }
  newString += word;
  return newString;
}
