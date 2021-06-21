/* exported zip */
function zip(first, second) {
  var arrayLength = first.length;
  var pairArray = [];
  var finalArray = [];
  if (second.length < first.length) {
    arrayLength = second.length;
  }
  for (var i = 0; i < arrayLength; i++) {
    pairArray.push(first[i]);
    pairArray.push(second[i]);
    finalArray.push(pairArray);
    pairArray = [];
  }
  return finalArray;
}
