const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  const db = process.argv[2];

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url === '/students') {
    let msg = 'This is a list of our students\n';
    countStudents(db)
      .then((namesPerField) => {
        const csStudents = namesPerField.CS;
        const sweStudents = namesPerField.SWE;
        msg += `Number of students: ${csStudents.length + sweStudents.length}\n`;
        msg += `Number of students in CS: ${csStudents.length}. List: `;

        let idx = 0;
        for (const student of csStudents) {
          let delimiter = '\n';
          if (idx < csStudents.length - 1) {
            delimiter = ', ';
          }
          msg += `${student}${delimiter}`;
          idx += 1;
        }

        msg += `Number of students in SWE: ${sweStudents.length}. List: `;
        idx = 0;
        for (const student of sweStudents) {
          let delimiter = '\n';
          if (idx < sweStudents.length - 1) {
            delimiter = ', ';
          }
          msg += `${student}${delimiter}`;
          idx += 1;
        }

        response.end(msg);
      })
      .catch((error) => {
        response.end(error.toString());
      });
  } else {
    response.end('Hello Holberton School!');
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
