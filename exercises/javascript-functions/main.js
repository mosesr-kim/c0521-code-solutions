function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('result of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log("result of greet('Beavis')", greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('result of getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log("result of getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }):",
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array.length - 1;
  var lastElementName = array[lastElement];
  return lastElementName;
}
console.log("result of getLastElement(['propane', 'and', 'propane', 'accessories']):",
  getLastElement(['propane', 'and', 'propane', 'accessories']));
