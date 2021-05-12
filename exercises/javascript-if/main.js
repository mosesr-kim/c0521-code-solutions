/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var underFive = '';
  if (number < 5) {
    underFive = true;
  } else {
    underFive = false;
  }
  return underFive;
}

function isEven(number) {
  var even = '';
  if (number % 2 === 0) {
    even = true;
  } else {
    even = false;
  }
  return even;
}

function startsWithJ(string) {
  var starts = '';
  if (string[0] === 'J') {
    starts = true;
  } else {
    starts = false;
  }
  return starts;
}

function isOldEnoughToDrink(person) {
  var oldEnough = '';
  if (person.age >= 21) {
    oldEnough = true;
  } else {
    oldEnough = false;
  }
  return oldEnough;
}

function isOldEnoughToDrive(person) {
  var oldEnough = '';
  if (person.age >= 16) {
    oldEnough = true;
  } else {
    oldEnough = false;
  }
  return oldEnough;
}

function isOldEnoughToDrinkAndDrive(person) {
  var OldEnough = false;
  return OldEnough;
}

function categorizeAcidity(pH) {
  var acidity = '';
  if (pH === 7) {
    acidity = 'neutral';
  } else if ((pH < 7) && (pH >= 0)) {
    acidity = 'acid';
  } else if ((pH > 7) && (pH <= 14)) {
    acidity = 'base';
  } else {
    acidity = 'invalid pH level';
  }
  return acidity;
}

function introduceWarnerBro(name) {
  var introduce = '';
  if ((name === 'yakko') || (name === 'wakko')) {
    introduce = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    introduce = 'I\'m cute~';
  } else {
    introduce = 'Goodnight everybody!';
  }
  return introduce;
}
