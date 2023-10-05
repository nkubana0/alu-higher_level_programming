#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
if (!movieId) {
  console.error('Please provide a URL as argument');
  process.exit(1);
}
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error('Error: Received code', response.statusCode);
    process.exit(1);
  }
  const film = JSON.parse(body);
  console.log(film.title);
});
