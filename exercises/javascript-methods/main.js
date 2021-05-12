var firstNumber = 100;
var secondNumber = 200;
var thirdNumber = 300;
var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('value of maximumValue:', maximumValue);
var heroes = ['batman', 'spiderman', 'captain america', 'iron man'];
var randomNumber = Math.random();
console.log('value of randomNumber:', randomNumber);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'The Goblet of Fire',
    author: 'J.K. Rowling'
  },
  {
    title: 'The Order of the Phoenix',
    author: 'J.K. Rowling'
  },
  {
    title: 'The Half-Blood Prince',
    author: 'J.K. Rowling'
  }
];
var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);
var js = {
  title: 'Javascript for Impatient Programers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library', library);

var fullName = 'Moses Kim';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
