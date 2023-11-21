const fs = require('fs')

function readDatabase (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const table = data.split('\n').filter((value) => value !== '');
        const columnTitles = {
          'firstName': 0,
          'lastName': 1,
          'age': 2,
          'field': 3
        };
        const namesPerField = {};

        for (const row of table) {
          const column = row.split(',');
          const field = column[columnTitles.field];
          const firstName = column[columnTitles.firstName];

          if (!Object.keys(namesPerField).includes(field)) {
            namesPerField[field] = []
          }
          namesPerField[field].push(firstName);
        }
      }
      resolve(namesPerField);
    });
  });
}

modules.export = readDatabase;
