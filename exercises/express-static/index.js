const express = require('express');

const path = require('path');

const app = express();

const publicDir = path.join(__dirname, '/public');

const serveFiles = express.static(publicDir);

app.use(serveFiles);

app.listen(3000, () => {
  console.log('Live on 3000!');
});
