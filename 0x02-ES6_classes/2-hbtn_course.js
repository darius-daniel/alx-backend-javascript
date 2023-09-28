export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = len;
    }
  }

  get students() {
    return this._students;
  }

  set students(array) {
    if (!Array.isArray(array)) {
      throw TypeError('Students must be an array');
    } else {
      this._students = array;
    }
  }
}
