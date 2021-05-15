/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (typeof (string[i]) === 'string') {
      newString = newString + string[i];
    }
  }
  return newString + '...';
}
