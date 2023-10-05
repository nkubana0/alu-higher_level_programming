#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];
const fileText = process.argv[3];

if (!filePath || !fileText) {
  console.log('Please provide both a file path and content as arguments.');
  process.exit(1);
}

function writeText (filePath, fileText) {
  fs.writeFile(filePath, fileText, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
  );
}
writeText(filePath, fileText);
