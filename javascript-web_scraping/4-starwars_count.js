#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Error: Received status code', response.statusCode);
    process.exit(1);
  }

  const films = JSON.parse(body).results;
  const wedgeAntillesMovies = films.filter((film) => {
    const characters = film.characters.map((url) => parseInt(url.split('/').slice(-2, -1)[0]));
    return characters.includes(characterId);
  });

  console.log(wedgeAntillesMovies.length);
});
