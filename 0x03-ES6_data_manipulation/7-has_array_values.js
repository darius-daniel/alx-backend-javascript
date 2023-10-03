export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (set.has(value) === false) {
      return false;
    }
  }

  return true;
}
