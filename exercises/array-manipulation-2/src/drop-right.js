/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
