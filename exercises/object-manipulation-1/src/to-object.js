/* exported toObject */
function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {
    [key]: value
  };
  return object;
}
