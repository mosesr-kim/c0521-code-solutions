const express = require('express');

const path = require('path');

const app = express();

path.join('./public', __dirname);

const serveFiles = express.static('public');

app.use(serveFiles);

app.listen(3000, () => {
  console.log('Live on 3000!');
});
