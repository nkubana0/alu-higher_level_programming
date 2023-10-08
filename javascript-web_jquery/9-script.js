$(document).ready(function () {
  $.get("https://fourtonfish.com/hellosalut/?lang=fr", function (data) {
    if (data && data.hello) {
      $("#hello").text(data.hello);
    } else {
      console.error("Error fetching translation data.");
    }
  });
});
