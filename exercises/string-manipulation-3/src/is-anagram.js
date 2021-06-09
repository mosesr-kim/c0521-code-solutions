/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.split(' ').join('');
  var second = secondString.split(' ').join('');
  var firstArray = [];
  var secondArray = [];
  for (var i = 0; i < first.length; i++) {
    firstArray.push(first[i]);
  }
  for (var z = 0; z < second.length; z++) {
    secondArray.push(second[z]);
  }
  var sortFirst = firstArray.sort();
  var sortSecond = secondArray.sort();
  var truth = true;
  for (var y = 0; y < sortFirst.length; y++) {
    if (sortFirst[y] !== sortSecond[y]) {
      return false;
    }
  }
  return truth;
}
