export default function cleanSet(set, startString) {
  let result = '';

  if (startString) {
    const words = [...set].filter((item) => item.startsWith(startString));

    for (const word of words) {
      let delimiter;

      if (!result) delimiter = '';
      else delimiter = '-';

      const sliceStart = word.lastIndexOf(startString[startString.length - 1]) + 1;
      const wordRemainder = word.slice(sliceStart, word.length);
      result = `${result}${delimiter}${wordRemainder}`;
    }
  }

  return result;
}
