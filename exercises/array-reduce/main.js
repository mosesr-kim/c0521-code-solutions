const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, number) => total + number);

const product = numbers.reduce((total, number) => total * number);

const balance = account.reduce((total, transaction) => {
  let transactionAmount = 0;
  if (transaction.type === 'deposit') {
    transactionAmount += transaction.amount;
  }
  if (transaction.type === 'withdrawal') {
    transactionAmount -= transaction.amount;
  }
  return total + transactionAmount;
}, 0);

const composite = traits.reduce((bigObject, currentObject) => Object.assign(bigObject, currentObject));
