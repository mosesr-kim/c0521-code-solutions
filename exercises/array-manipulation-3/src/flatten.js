/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var z = 0; z < array[i].length; z++) {
        newArray.push(array[i][z]);
      }
    }
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
