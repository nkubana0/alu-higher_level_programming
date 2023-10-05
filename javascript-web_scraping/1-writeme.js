#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const fileText = process.argv[3];

if (!filePath || !fileText) {
  process.exit(1);
}

fs.writeFile(filePath, fileText, (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFileSync(filePath, 'utf-8');
  }
}
);
