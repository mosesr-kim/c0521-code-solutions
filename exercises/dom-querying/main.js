console.log('hello, world');

var h1 = document.querySelector('h1');
console.log("document.querySelector('h1'):", document.querySelector('h1'));
console.dir(h1);

var explanation = document.querySelector('#explanation');
console.log("document.querySelector('#explanation'):", document.querySelector('#explanation'));
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log("document.querySelector('.hint');", document.querySelector('.hint'));
console.dir(hint);

var p = document.querySelectorAll('p');
console.log("'p':", p);

var exampleLink = document.querySelectorAll('.example-link');
console.log("'exampleLink':", exampleLink);
