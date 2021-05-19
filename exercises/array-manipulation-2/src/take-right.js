/* exported takeRight */
function takeRight(array, count) {
  if (array.length === 0) {
    return [];
  }
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
