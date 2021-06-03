/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var z = 0; z < second.length; z++) {
    if (!first.includes(second[z])) {
      newArray.push(second[z]);
    }
  }
  return newArray;
}
