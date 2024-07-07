export const adjacentElementsProduct = (inputArray: number[]): number => {
  let max = 0;

  inputArray.forEach((item, index) => {
    if (index < inputArray.length - 1) {
      const currentResult = item * inputArray[index + 1];
      if (currentResult >= max) {
        max = currentResult;
      }
    }
  });

  return max;
};

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
