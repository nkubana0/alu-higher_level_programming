$(document).ready(function () {
	var apiUrl = "https://swapi-api.alx-tools.com/api/people/5/?format=json";
	$.getJSON(apiUrl, function(data) {
		var characterName = data.name;
		$("#character").text(characterName);
	});
});
