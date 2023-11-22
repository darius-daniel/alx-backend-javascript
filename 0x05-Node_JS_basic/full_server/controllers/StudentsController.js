import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];
    readDatabase(database)
      .then((namesPerField) => {
        let msg = 'This is the list of our students\n';

        for (const field of Object.keys(namesPerField).sort()) {
          msg += `Number of students in ${field}: ${namesPerField[field].length}. List: `;

          let idx = 0;
          for (const student of namesPerField[field]) {
            let delimiter = '\n';
            if (idx < namesPerField[field].length - 1) {
              delimiter = ', ';
            }
            msg += `${student}${delimiter}`;
            idx += 1;
          }
        }
        response.status().send(msg);
      })
      .catch(() => {
        response.status(200).send(new Error('Cannot load the database'));
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      const database = process.argv[2];
      readDatabase(database)
        .then((namesPerField) => {
          let msg = 'List: ';

          let idx = 0;
          for (const student of namesPerField.major) {
            let delimiter = '\n';
            if (idx < namesPerField.major.length) {
              delimiter = ', ';
            }
            msg += `${student}${delimiter}`;
            idx += 1;
          }
          response.status(200).send(msg);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
