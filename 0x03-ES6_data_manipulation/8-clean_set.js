export default function cleanSet(set, startString) {
  let result = '';

  if (startString) {
    const words = [...set].filter((item) => item.startsWith(startString));

    for (const word of words) {
      let delimiter;

      if (!result) delimiter = '';
      else delimiter = '-';

      const wordRemainder = word.slice(2 - word.indexOf(startString[-1]));
      result = `${result}${delimiter}${wordRemainder}`;
    }
  }

  return result;
}
