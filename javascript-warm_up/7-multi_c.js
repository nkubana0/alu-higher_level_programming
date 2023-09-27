#!/usr/bin/node
const xArg = parseInt(process.argv[2]);
if (!isNaN(xArg)) {
  for (let i = 0; i < xArg; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
