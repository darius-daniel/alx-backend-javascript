interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

interface createEmployeeInterface {
  (salary: number | string): Director | Teacher;
}

const createEmployee: createEmployeeInterface = (salary: number | string): Director | Teacher => {
  let pay: number | string;
  let employee: Director | Teacher;

  if (typeof salary === 'string') pay = Number(salary.slice(1));
  else pay = salary;

  if (pay < 500) employee = new Teacher();
  else employee = new Director();

  return employee;
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

interface isDirectorInterface {
  (employee: Director | Teacher): boolean;
};

const isDirector: isDirectorInterface = (employee: Director | Teacher): boolean => {
  if (employee instanceof Director) return true;
  else return false;
};

interface executeWorkInterface {
  (employee: Director | Teacher): string;
};

const executeWork: executeWorkInterface = (employee: Director | Teacher): string => {
  if (isDirector(employee) === true) return employee.workDirectorTasks();
  else return employee.workTeacherTasks();
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

let Subjects: 'Math' | 'History';

interface teachClassInterface {
  (todayClass: string): string;
};

const teachClass: teachClassInterface = (todayClass: string): string => `Teaching ${todayClass}`;

console.log(teachClass('Math'));
console.log(teachClass('History'));
