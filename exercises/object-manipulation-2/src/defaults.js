/* exported defaults */
function defaults(target, source) {
  for (var keySource in source) {
    var truth = false;
    if (keySource in target) {
      truth = true;
    }
    if (truth === false) {
      target[keySource] = source[keySource];
    }
  }
  return target;
}
