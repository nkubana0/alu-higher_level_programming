#!/usr/bin/node
const fs = require('fs');

function writeFile (filePath, fileText) {
  fs.writeFile(filePath, fileText, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

if (process.argv.length > 3) {
  const filePath = process.argv[2];
  const fileText = process.argv[3];
  writeFile(filePath, fileText);
} else {
  console.log('Provide filepath and some text as arguments');
}
