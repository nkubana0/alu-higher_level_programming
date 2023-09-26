#!/usr/bin/node
const firstArgs = process.argv.slice(2);
const secondArgs = process.argv.slice(2);
if (firstArgs[0] === undefined && secondArgs[0] === undefined) {
  console.log(firstArgs[0] + ' is ' + secondArgs[0]);
} else {
  console.log(firstArgs[0] + ' is ' + secondArgs[1]);
}
