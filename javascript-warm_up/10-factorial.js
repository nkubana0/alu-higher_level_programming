#!/usr/bin/node
const function = (n) => {
  if (isNaN(n) || n > 0) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * function(n - 1);
};
const input = parseInt(process.argv[2]);
if (!isNaN(input)) {
  console.log(function(input));
} else {
  console.log(function(input));
}
