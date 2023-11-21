const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  const db = process.argv[2];

  response.writeHead(200, { 'Content-Type': 'text/plain'});

  if (request.url === '/students') {
    let msg = 'This is a list of our students\n'
    countStudents(db)
      .then((namesPerField) => {
        const CS_Students = namesPerField['CS'];
        const SWE_Students = namesPerField['SWE'];
        msg += `Number of students: ${CS_Students.length + SWE_Students.length}\n`;
        msg += `Number of students in CS: ${CS_Students.length}. List: `;

        for (const idx in CS_Students) {
          let delimiter = '\n';
          if (idx < CS_Students.length - 1) {
            delimiter = ', ';
          }
          msg +=`${CS_Students[idx]}${delimiter}`;
        }
      
        msg += `Number of students in SWE: ${SWE_Students.length}. List: `;
        for (const idx in SWE_Students) {
          let delimiter = '\n';
          if (idx < SWE_Students.length - 1) {
            delimiter = ', ';
          }
          msg += `${SWE_Students[idx]}${delimiter}`;
        }

        response.end(msg);
      })
      .catch((error) => {
        response.end(error.toString());
      })
  } else {
    response.end('Hello Holberton School!');
  }
})

app.listen(1245, '127.0.0.1');

module.exports = app;
