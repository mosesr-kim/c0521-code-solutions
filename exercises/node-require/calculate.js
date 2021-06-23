const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const firstNumber = process.argv[2];
const operator = process.argv[3];
const secondNumber = process.argv[4];
if (operator === 'plus') {
  console.log(`result: ${add(firstNumber, secondNumber)}`);
}
if (operator === 'minus') {
  console.log(`result: ${subtract(firstNumber, secondNumber)}`);
}
if (operator === 'times') {
  console.log(`result: ${multiply(firstNumber, secondNumber)}`);
}
if (operator === 'over') {
  console.log(`result: ${divide(firstNumber, secondNumber)}`);
}
