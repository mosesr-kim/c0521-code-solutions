const express = require('express');

const app = express();

const fs = require('fs');

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/notes', (req, res) => {
  const notesData = [];
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: 'an unexpected error occured' });
      return;
    }
    const parsedData = JSON.parse(data);
    for (const key in parsedData.notes) {
      notesData.push(parsedData.notes[key]);
    }
    res.status(200).send(notesData);
  });
});

app.get('/api/notes/:id', (req, res) => {
  if (Math.sign(req.params.id) === 1 && Number.isInteger(parseFloat(req.params.id))) {
    fs.readFile('data.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
        return;
      }
      const parsedData = JSON.parse(data);
      if (parsedData.notes[req.params.id]) {
        res.status(200).send(parsedData.notes[req.params.id]);
      } else {
        res.status(404).send({ error: `cannot find not with id ${req.params.id}` });
      }
    });
  } else {
    res.status(400).send({ error: 'id must be a positive integer' });
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content) {
    fs.readFile('data.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
        return;
      }
      const parsedData = JSON.parse(data);
      const Id = parsedData.nextId;
      parsedData.notes[Id] = req.body;
      parsedData.notes[Id].id = parsedData.nextId;
      parsedData.nextId++;
      const stringedData = JSON.stringify(parsedData, null, 2);
      fs.writeFile('data.json', stringedData, err => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: 'an unexpected error occured' });
          return;
        }
        res.status(201).send(parsedData.notes[Id]);
      });
    });
  } else {
    res.status(400).send({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (Math.sign(req.params.id) === 1 && Number.isInteger(parseFloat(req.params.id))) {
    fs.readFile('data.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
        return;
      }
      const parsedData = JSON.parse(data);
      if (parsedData.notes[req.params.id]) {
        delete parsedData.notes[req.params.id];
        const stringedData = JSON.stringify(parsedData, null, 2);
        fs.writeFile('data.json', stringedData, err => {
          if (err) {
            console.error(err);
            res.status(500).send({ error: 'an unexpected error occured' });
            return;
          }
          res.status(204).send();
        });
      } else {
        res.status(404).send({ error: `cannot find not with id ${req.params.id}` });
      }
    });
  } else {
    res.status(400).send({ error: 'id must be a positive integer' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (Math.sign(req.params.id) === 1 && Number.isInteger(parseFloat(req.params.id))) {
    if (req.body.content) {
      fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: 'an unexpected error occured' });
          return;
        }
        const parsedData = JSON.parse(data);
        if (parsedData.notes[req.params.id]) {
          parsedData.notes[req.params.id].content = req.body.content;
          const stringedData = JSON.stringify(parsedData, null, 2);
          fs.writeFile('data.json', stringedData, err => {
            if (err) {
              console.error(err);
              res.status(500).send({ error: 'an unexpected error occured' });
              return;
            }
            res.status(200).send(parsedData.notes[req.params.id]);
          });
        } else {
          res.status(404).send({ error: `cannot find not with id ${req.params.id}` });
        }
      });
    } else {
      res.status(400).send({ error: 'content is a required field' });
    }
  } else {
    res.status(400).send({ error: 'id must be a positive integer' });
  }
});
