#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const fileText = process.argv[3];
if (!filePath || !fileText) {
  console.error();
	process.exit(1);
}
fs.writeFile(filePath, fileText, 'utf-8', (err) => {
  if (err) {
    console.error();
  }
}
);
