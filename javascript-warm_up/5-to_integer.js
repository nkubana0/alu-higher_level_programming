#!/usr/bin/node
if (process.argv.length < 3) {
  console.log('Not a number');
} else {
  const firstArgument = process.argv[2];
  const integerValue = parseInt(firstArgument);

  if (Number.isInteger(integerValue)) {
    console.log('My number: ' + integerValue);
  } else {
    console.log('Not a number');
  }
}
