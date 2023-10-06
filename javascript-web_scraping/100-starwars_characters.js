#!/usr/bin/node
const request = require('request');
const args = process.argv;

request(`https://swapi-api.hbtn.io/api/films/${args[2]}`, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const charEnd = data.characters;
    const loopTime = charEnd.length;
    for (let i = 0; i < loopTime; i++) {
      request(charEnd[i], function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.parse(body).name);
        }
      });
    }
  }
});
