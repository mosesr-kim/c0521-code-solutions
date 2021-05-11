var student = {
  firstName: 'Moses',
  lastName: 'Kim',
  age: '20'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Auto Industry';
console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'GR Supra',
  year: '2021'
};

vehicle['color'] = 'Nitro Yellow';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Beardy',
  type: 'Bearded Dragon'
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
