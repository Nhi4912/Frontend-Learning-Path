export const allLongestStrings = (inputArray: string[]): string[] => {
  const temp = inputArray.map((item) => item.length);

  const max = Math.max(...temp);

  return inputArray.filter((item) => item.length === max);
};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
