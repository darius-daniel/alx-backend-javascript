const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    const namesPerField = {};

    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const table = data.split('\n').filter((value) => value !== '');
        const columnTitles = {
          'firstName': 0,
          'lastName': 1,
          'age': 2,
          'field': 3
        }

        for (const row of table) {
          const column = row.split(',');
          const field = column[columnTitles.field];
          const firstName = column[columnTitles.firstName];

          if (!Object.keys(namesPerField).includes(field)) {
            namesPerField[field] = []
          }
          namesPerField[field].push(firstName);
        }

        const CS_Students = namesPerField['CS'];
        console.log(`Number of students: ${table.length - 1}`);
        process.stdout.write(`Number of students in CS: ${CS_Students.length}. List: `);
        for (const idx in CS_Students) {
          let delimiter = '\n';
          if (idx < CS_Students.length - 1) {
            delimiter = ', ';
          }
          process.stdout.write(`${CS_Students[idx]}${delimiter}`);
        }
      
        const SWE_Students = namesPerField['SWE'];
        process.stdout.write(`Number of students in CS: ${SWE_Students.length}. List: `);
        for (const idx in SWE_Students) {
          let delimiter = '\n';
          if (idx < SWE_Students.length - 1) {
            delimiter = ', ';
          }
          process.stdout.write(`${SWE_Students[idx]}${delimiter}`);
        }
      }
      resolve(namesPerField);
    });
  });
}

module.exports = countStudents;
