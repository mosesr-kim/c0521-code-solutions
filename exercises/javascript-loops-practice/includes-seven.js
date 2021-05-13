/* exported includesSeven */
function includesSeven(array) {
  var truth = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      truth = true;
    }
  }
  return truth;
}
