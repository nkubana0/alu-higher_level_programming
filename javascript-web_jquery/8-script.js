$(document).ready(function () {
  $.get("https://swapi-api.alx-tools.com/api/films/?format=json", function (data) {
    if (data && data.results) {
      $.each(data.results, function (index, movie) {
        $("#list_movies").append("<li>" + movie.title + "</li>");
      });
    } else {
      console.error("Error fetching movie data.");
    }
  });
});
