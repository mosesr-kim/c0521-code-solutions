/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      var newValue = source[keys[i]];
      newObject[keys[i]] = newValue;
    }
    if (newValue === undefined) {
      delete newObject[keys[i]];
    }
  }
  return newObject;
}
