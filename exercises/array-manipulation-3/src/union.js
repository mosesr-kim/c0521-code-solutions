/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var z = 0; z < second.length; z++) {
    if (!newArray.includes(second[z])) {
      newArray.push(second[z]);
    }
  }
  return newArray;
}
