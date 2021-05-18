/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    if ((keys[0] in source === true) ||
    (keys[1] in source === true) ||
    (keys[2] in source === true)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
