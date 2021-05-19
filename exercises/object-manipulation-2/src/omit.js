/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    var truth = false;
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        truth = true;
      }
    }
    if (truth === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
