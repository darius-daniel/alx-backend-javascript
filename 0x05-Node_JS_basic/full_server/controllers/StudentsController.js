const readDatabase = require('../utils.js');

class StudentsController {

  static getAllStudents (request, response) {
    readDatabase(request.db)
      .then((namesPerField) => {
        let msg = 'This is the list of our students';

        for (const field of Object.keys(namesPerField).sort()) {
          msg += '\n' + `Number of students in ${field}: ${namesPerField[field].length}. List: `;

          for (const index in namesPerField[field]) {
            let delimiter = '\n';
            const firstName = namesPerField[field][index];

            if (index < namesPerField[field].length - 1) {
              delimiter = ', ';
            }

            msg += `${firstName}${delimiter}`;
          }
        }
        response.send(200, msg);
      })
      .catch(() => {
        response.send(500, new Error('Cannot load the database'));
      });
  }

  static getAllStudentsByMajor (request, response) {
    const major = request.headers.major;

    if (!['CS', 'SWE'].includes(major)) {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(request.db)
        .then((namesPerField) => {
          let msg = 'List: ';

          for (const index in namesPerField.major) {
            let delimiter = '\n';
            if (index < namesPerField.major.length) {
              delimiter = ', ';
            }
            msg += `${namesPerField.major[index]}${delimiter}`;
          }

          response.send(200, msg);
        })
        .catch(() => {
          response.send(500, 'Cannot load the database');
        })
    }
  }
}

module.exports = StudentsController;
