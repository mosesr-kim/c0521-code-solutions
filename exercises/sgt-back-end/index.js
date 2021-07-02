const express = require('express');
const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Live on port 3000!');
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;
  const dbQuery = db.query(sql);
  dbQuery.then(result => {
    const grades = result;
    res.status(200).send(grades.rows);
  });
  dbQuery.catch(err => {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occured' });
  });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({ error: 'name, course and score is a required field' });
  }
  const score = parseFloat(req.body.score);
  if (!Number.isInteger(score) || !(score >= 0) || !(score <= 100)) {
    res.status(400).send({ error: 'score must be an integer from 0 to 100' });
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  const dbQuery = db.query(sql, params);
  dbQuery.then(result => {
    const postResult = result;
    res.status(201).send(postResult.rows[0]);
  });
  dbQuery.catch(err => {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occured' });
  });
});

app.put('/api/grades/:gradeId', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({ error: 'name, course and score is a required field' });
  }
  const gradeId = parseFloat(req.params.gradeId);
  if (!Number.isInteger(gradeId)) {
    res.status(400).send({ error: 'gradeId must be a positive integer' });
  }
  const score = parseFloat(req.body.score);
  if (!Number.isInteger(score) || !(score >= 0) || !(score <= 100)) {
    res.status(400).send({ error: 'score must be an integer from 0 to 100' });
  }
  const sql = `
    update "grades"
       set "name"   = $1,
           "course" = $2,
           "score"  = $3
    where "gradeId" = $4
    returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score, gradeId];
  const dbQuery = db.query(sql, params);
  dbQuery.then(result => {
    if (!result.rows[0]) {
      res.status(404).send({ error: 'gradeId does not exist in the database' });
    }
    const updateResult = result;
    res.status(200).send(updateResult.rows[0]);
  });
  dbQuery.catch(err => {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occured' });
  });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseFloat(req.params.gradeId);
  if (!Number.isInteger(gradeId)) {
    res.status(400).send({ error: 'gradeId must be a positive integer' });
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  const dbQuery = db.query(sql, params);
  dbQuery.then(result => {
    if (!result.rows[0]) {
      res.status(404).send({ error: 'gradeId does not exist in the database' });
    }
    res.status(204).send();
  });
  dbQuery.catch(err => {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error has occured' });
  });
});
