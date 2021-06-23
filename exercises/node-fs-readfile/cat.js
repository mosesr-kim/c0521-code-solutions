const fs = require('fs');
const textFiles = [];
const text = '';
for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw (err);
    textFiles.splice(i, 1, '\n' + data);
    if (textFiles.length === process.argv.length - 2) {
      console.log(text);
    }
  });
}
