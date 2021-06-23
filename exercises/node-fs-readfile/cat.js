const fs = require('fs');
let text = '';
for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw (err);
    text += '\n' + data;
    if ((i + 1) === process.argv.length) {
      console.log(text);
    }
  });
}
