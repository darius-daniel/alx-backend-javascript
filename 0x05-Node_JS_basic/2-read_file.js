const fs = require('fs');

function countStudents (path) {
  let fileContents;
  const CS_Students = [];
  const SWE_Students = [];

  try {
    fileContents = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const table = fileContents.split('\n').filter((value) => value !== '');
  const columnTitles = {
    'firstName': 0,
    'lastName': 1,
    'age': 2,
    'field': 3
  };

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

module.exports = countStudents;
