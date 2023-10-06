#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide the Movie ID as an argument.');
  process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Error:', `Received status code ${response.statusCode}`);
    process.exit(1);
  }

  const film = JSON.parse(body);
  const characters = film.characters;

  // Fetch details for each character
  characters.forEach((characterUrl) => {
    request(characterUrl, (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error fetching character details:', charError.message);
        process.exit(1);
      }

      if (charResponse.statusCode !== 200) {
        console.error('Error:', `Received status code ${charResponse.statusCode}`);
        process.exit(1);
      }

      const character = JSON.parse(charBody);
      console.log(character.name);
    });
  });
});
