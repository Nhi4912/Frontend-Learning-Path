export function almostIncreasingSequence(sequence: number[]): boolean {
  let temp = 0;
  const length = sequence.length;

  sequence.forEach((item, index) => {
    if (item > sequence[index+1] && index > length - 1) {
        temp = temp + 1
    }
  })

  return temp <= 1;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 