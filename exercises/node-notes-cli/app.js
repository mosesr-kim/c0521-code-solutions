const fs = require('fs');
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  if (process.argv[2] === 'read') {
    for (var key in parsedData.notes) {
      console.log(`${key}: ${parsedData.notes[key]}`);
    }
  }
  if (process.argv[2] === 'create') {
    let note = '';
    for (let i = 3; i < process.argv.length; i++) {
      if (i === process.argv.length - 1) {
        note += process.argv[i];
        break;
      }
      note += `${process.argv[i]} `;
    }
    parsedData.notes[parsedData.nextId] = note;
    parsedData.nextId++;
  }
  if (process.argv[2] === 'delete') {
    delete parsedData.notes[process.argv[3]];
  }
  if (process.argv[2] === 'update') {
    let updatedNote = '';
    for (let i = 4; i < process.argv.length; i++) {
      if (i === process.argv.length - 1) {
        updatedNote += process.argv[i];
        break;
      }
      updatedNote += `${process.argv[i]} `;
    }
    parsedData.notes[process.argv[3]] = updatedNote;
  }
  const stringedData = JSON.stringify(parsedData, null, 2);
  fs.writeFile('./data.json', stringedData, err => {
    if (err) throw err;
  });
});
