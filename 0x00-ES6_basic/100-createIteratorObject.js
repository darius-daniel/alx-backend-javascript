export default function createIteratorObject(report) {
  let result = [];

  for (const obj of Object.values(report)) {
    if (typeof (obj) === 'object') {
      for (const val of Object.values(obj)) {
        result = result.concat([...val]);
      }
    }
  }
  return result;
}
