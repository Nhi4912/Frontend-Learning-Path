export const absoluteValuesSumMinimization = (a: number[]): number => {
  const sizeOfArray = a.length;
  const isEvenArray = sizeOfArray % 2 === 0;

  if (isEvenArray) {
    return a[sizeOfArray / 2 - 1];
  }
  return a[Math.floor(sizeOfArray / 2)];
};

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
