/* exported chunk */
function chunk(array, size) {
  var storageArray = [];
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    storageArray.push(array[i]);
    if (storageArray.length === size) {
      newArray.push(storageArray);
      storageArray = [];
    }
  }
  if (storageArray.length > 0) {
    newArray.push(storageArray);
  }
  return newArray;
}
