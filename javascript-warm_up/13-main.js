#!/usr/bin/node
const add = require('./13-add').add;
const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[3]);
console.log(add(firstInt, secondInt));
