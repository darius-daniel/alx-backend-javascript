export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    let value;
    if (hint === 'number') {
      value = this._size;
    } else if (hint === 'string') {
      value = this._location;
    }
    return value;
  }
}
