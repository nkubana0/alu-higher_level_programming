#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide a URL and a file path as arguments');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error('Error: Received code ', response.statusCode);
    process.exit(1);
  }

  fs.writeFile(filePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error('Error writing file:', writeError.message);
      process.exit(1);
    }
  });
});
