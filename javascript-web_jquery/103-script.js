$(document).ready(function () {
  function fetchTranslation() {
    var languageCode = $("#language_code").val();

    if (languageCode.trim() === "") {
      alert("Please enter a language code.");
      return;
    }
    $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function (data) {
      if (data && data.hello) {
        $("#hello").text(data.hello);
      } else {
        console.error("Error fetching translation data.");
      }
    });
  }

  $("#btn_translate").click(fetchTranslation);

  $("#language_code").keypress(function (event) {
    if (event.which === 13) {
      fetchTranslation();
    }
  });
});
