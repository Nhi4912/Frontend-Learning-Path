export const addTwoDigits = (n: any): number => {
  const firstElement = Math.floor(n / 10);
  const secondElement = n % 10;

  return firstElement + secondElement;
};

// console.log(addTwoDigits(29));
