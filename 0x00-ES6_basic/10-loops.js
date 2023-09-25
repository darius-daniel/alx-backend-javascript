export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array.shift();
    array.push(appendString.concat(value));
  }

  return array;
}
