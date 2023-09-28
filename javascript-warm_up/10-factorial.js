#!/usr/bin/node
function innerFactorial (n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * innerFactorial(n - 1);
}
const factorial = (n) => innerFactorial(n);

const input = parseInt(process.argv[2]);
if (!isNaN(input)) {
  console.log(factorial(input));
} else {
  console.log(factorial(input));
}
