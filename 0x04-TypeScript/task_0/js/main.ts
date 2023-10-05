interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Darius',
  lastName: 'Daniel',
  age: 24,
  location: 'Kaduna',
};

const student2: Student = {
  firstName: 'Julien',
  lastName: 'Barbier',
  age: 37,
  location: 'California',
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');

for (const student of studentsList) {
  let cell;
  const row = document.createElement('tr');

  cell = document.createElement('td');
  cell.textContent = student.firstName;
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.textContent = student.location;
  row.appendChild(cell);

  table.appendChild(row);
}

document.appendChild(table);
