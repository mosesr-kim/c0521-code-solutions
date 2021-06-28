const express = require('express');
const app = express();
const jsonMiddleware = express.json();
let nextId = 1;
const grades = {};
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to port 3000!');
});
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});
app.use(jsonMiddleware);
app.post('/api/grades', (req, res) => {
  const currentId = nextId;
  grades[nextId] = req.body;
  grades[nextId].Id = nextId;
  nextId++;
  res.status(201).send(grades[currentId]);
});
