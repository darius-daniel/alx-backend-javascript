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
    .then((nameByField) => {
      let r = 'This is the list of our students\n';

      let studentCount = 0;
      for (const studentList of Object.values(nameByField)) {
        studentCount += studentList.length;
      }
      r += `Number of students: ${studentCount}\n`;

      for (const cls of Object.keys(nameByField)) {
        r += `Number of students in ${cls}: ${nameByField[cls].length}. List: `;

        let idx = 0;
        for (const student of nameByField[cls]) {
          let delimiter = '';
          if (idx < nameByField[cls].length - 1) {
            delimiter = ', ';
          }
          r += `${student}${delimiter}`;
          idx += 1;
        }

        if (Object.keys(nameByField).lastIndexOf(cls) !== Object.keys(nameByField).length - 1) {
          r += '\n';
        }
      }
      response.send(r);
    })
    .catch((error) => {
      response.send(error.toString());
    });
});

app.listen(port);

module.exports = app;
