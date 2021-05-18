/* exported defaults */
function defaults(target, source) {
  debugger
  for (var keySource in source) {
    truth = false;
    for (var keyTarget in target) {
      if (keySource in target) {
        truth = true;
      }
    }
    if (truth === false) {
      target[keySource] = source[keySource];
    }
  }
  return target;
}
