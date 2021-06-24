const fs = require('fs');
let note = '';
for (let i = 2; i < process.argv.length; i++) {
  note += `${process.argv[i]} `;
}
fs.writeFile('note.txt', note, 'utf8', err => {
  if (err) throw err;
});
