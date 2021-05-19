/* exported includes */
function includes(array, value) {
  var truth = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      truth = true;
    }
  }
  return truth;
}
