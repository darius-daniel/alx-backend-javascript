export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `${this.constructor} [${this._code}] { _name: ${this._name}, _code: ${this._code}}`;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
