var newArray = [
  {
    isbn: '9780451524935',
    title: '1984',
    author: 'George Orwell'
  },
  {
    isbn: '9780451526342',
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    isbn: '9781451673319',
    title: 'Fahrenheit 451',
    author: 'George Orwell'
  }
];

console.log('typeof(newArray):', typeof (newArray));

var jsonArray = JSON.stringify(newArray);

console.log('typeof(JSON.stringify(jsonArray)):', typeof (JSON.stringify(jsonArray)));

var jsonString = '{"firstName":"Moses","lastName":"Kim","studentId":"0623"}';

console.log('typeof(jsonString):', typeof (jsonString));

var jsonObj = JSON.parse(jsonString);

console.log('typeof(jsonObj):', typeof (jsonObj));

console.log('jsonObj:', jsonObj);
