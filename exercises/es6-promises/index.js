const takeAChance = require('./take-a-chance');

const mo = takeAChance('Mo');

mo.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
