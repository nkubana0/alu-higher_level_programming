$(document).ready(function () {
	$("#toggle_header").click(function () {
		var headerElement = $("header");
		headerElement.toggleClass("red green");
	});
});
