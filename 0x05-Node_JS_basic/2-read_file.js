const fs = require('fs');

function countStudents(path) {
  let fileContents;
  const namesByField = {};

  try {
    fileContents = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const table = fileContents.split('\n').filter((value) => value !== '');
  const columnTitles = {
    firstName: 0,
    lastName: 1,
    age: 2,
    field: 3,
  };

  for (const row of table) {
    const columns = row.split(',');
    const field = columns[columnTitles.field];
    const firstName = columns[columnTitles.firstName];

    if (!Object.keys(namesByField).includes(field)) {
      namesByField[field] = [];
    }

    namesByField[field].push(firstName);
  }

  let msg = `Number of students: ${table.length - 1}\n`;
  const csStudents = namesByField.CS;
  const sweStudents = namesByField.SWE;

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

  process.stdout.write(msg);
}

module.exports = countStudents;
