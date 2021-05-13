/* exported findIndex */
function findIndex(array, value) {
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      index = i;
      break;
    }
  }
  return index;
}
