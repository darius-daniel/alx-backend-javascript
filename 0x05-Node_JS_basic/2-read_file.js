const fs = require('fs');

function countStudents (path) {
  let fileContents;
  const stdCS = [];
  const stdSWE = [];

  try {
    fileContents = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const table = fileContents.split('\n');
  for (const row of table) {
    const columns = row.split(',');
    if (columns.includes('CS')) {
      stdCS.push(columns[0]);
    } else if (columns.includes('SWE')) {
      stdSWE.push(columns[0]);
    }
  }
  console.log(`Number of students: ${table.length - 2}`);

  process.stdout.write(`Number of students in CS: ${stdCS.length}. List: `);
  for (const idx in stdCS) {
    let delimiter = '\n';
    if (idx < stdCS.length - 1) {
      delimiter = ', ';
    }
    process.stdout.write(`${stdCS[idx]}${delimiter}`);
  }

  process.stdout.write(`Number of students in CS: ${stdSWE.length}. List: `);
  for (const idx in stdSWE) {
    let delimiter = '\n';
    if (idx < stdSWE.length - 1) {
      delimiter = ', ';
    }
    process.stdout.write(`${stdSWE[idx]}${delimiter}`);
  }
}

module.exports = countStudents;
