#!/usr/bin/node
function findSecondLargest (numbers) {
  if (numbers.length <= 1) {
    return 0;
  } else {
    const maxNumber = Math.max(...numbers);
    const withoutmax = numbers.filter(n => n !== maxNumber);
    if (withoutmax === 0) {
      return 0;
    }
    const secondLargest = Math.max(...withoutmax);
    return secondLargest;
  }
}
const args = process.argv.slice(2).map(Number);
console.log(findSecondLargest(args));
