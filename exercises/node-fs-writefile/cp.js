/* node.js cp.js note.txt reminder.txt */
const fs = require('fs');
const file = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
});

function copy() {
  fs.writeFile(process.argv[3], file, 'utf8', err => {
    if (err) throw err;
  });
}
