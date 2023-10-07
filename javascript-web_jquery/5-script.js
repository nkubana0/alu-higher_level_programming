$(document).ready(function () {
	$("#add_item").click(function () {
		var newItem = $("<li>Item</li>");
		$("ul.my_list").append(newItem);
	});
});
