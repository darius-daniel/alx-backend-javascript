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

  for (const row of table.slice(1)) {
    const columns = row.split(',');
    const cls = columns[columnTitles.field];
    const fName = columns[columnTitles.firstName];

    if (!Object.keys(namesByField).includes(cls)) {
      namesByField[cls] = [];
    }

    namesByField[cls].push(fName);
  }

  let msg = `Number of students: ${table.length - 1}\n`;
  for (const cls of Object.keys(namesByField)) {
    msg += `Number of students in ${cls}: ${namesByField[cls].length}. List: `;

    let idx = 0 ;
    for (const student of namesByField[cls]) {
      let delimiter = '\n';

      if (idx < namesByField[cls].length - 1) {
        delimiter = ', ';
      }

      msg += `${student}${delimiter}`;
      idx += 1;
    }
  }
  process.stdout.write(msg);
}

module.exports = countStudents;
