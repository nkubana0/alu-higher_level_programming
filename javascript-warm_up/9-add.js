#!/usr/bin/node
const firstArgument = parseInt(process.argv[2]);
const secondArgument = parseInt(process.argv[3]);
if (!isNaN(firstArgument) && !isNaN(secondArgument)) {
  console.log(add(firstArgument, secondArgument));
} else {
  console.log('NaN');
}
function add (a, b) {
  return (a + b);
}
