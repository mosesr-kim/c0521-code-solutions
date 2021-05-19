/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if ((keys[i] in source) && (source[keys[i]] !== undefined)){
      var newValue = source[keys[i]];
      newObject[keys[i]] = newValue;
    }
  }
  return newObject;
}
