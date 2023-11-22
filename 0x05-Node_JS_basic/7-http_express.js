const express = require('express');
const countStudents = require('./3-read_file_async');
const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const db = process.argv[2];

  countStudents(db)
    .then(());
})

app.listen(port);

module.exports = app;
