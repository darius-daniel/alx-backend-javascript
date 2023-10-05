export default function cleanSet(set, startString) {
  let result = '';

  if (startString.length > 0) {
    const words = [...set].filter((item) => item.startsWith(startString));

    for (const word of words) {
      let delimiter;

      if (result.length === 0) delimiter = '';
      else delimiter = '-';

      const sliceStart = word.lastIndexOf(startString[startString.length - 1]) + 1;
      const wordRemainder = word.slice(sliceStart, word.length);
      result = `${result}${delimiter}${wordRemainder}`;
    }
  }

  return result;
}
