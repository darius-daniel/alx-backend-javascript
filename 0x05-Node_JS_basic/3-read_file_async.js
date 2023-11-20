const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
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

        const SWE_Students = [];
        const CS_Students = [];

        for (const row of table) {
          const columns = row.split(',');
          if (columns[columnTitles.field] === 'CS') {
            CS_Students.push(columns[columnTitles.firstName]);
          } else if (columns[columnTitles.field] === 'SWE') {
            SWE_Students.push(columns[columnTitles.firstName]);
          }
        }
        console.log(`Number of students: ${table.length - 1}`);
      
        process.stdout.write(`Number of students in CS: ${CS_Students.length}. List: `);
        for (const idx in CS_Students) {
          let delimiter = '\n';
          if (idx < CS_Students.length - 1) {
            delimiter = ', ';
          }
          process.stdout.write(`${CS_Students[idx]}${delimiter}`);
        }
      
        process.stdout.write(`Number of students in CS: ${SWE_Students.length}. List: `);
        for (const idx in SWE_Students) {
          let delimiter = '\n';
          if (idx < SWE_Students.length - 1) {
            delimiter = ', ';
          }
          process.stdout.write(`${SWE_Students[idx]}${delimiter}`);
        }
      }
      resolve(process.exit)
    })
  })
}

module.exports = countStudents;
