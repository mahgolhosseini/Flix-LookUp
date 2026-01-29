const button = document.querySelector("#searchBtn");
const input = document.querySelector("#movieInput");
const results = document.querySelector("#results");

const API_KEY = "239064e6";

button.addEventListener("click", function () {
  const movieName = input.value;

  results.innerHTML = "";

  fetch("https://www.omdbapi.com/?apikey=" + API_KEY + "&s=" + movieName)


    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!data.Search) {
        results.innerHTML = "<p>No movies found</p>";
        return;
      }

      data.Search.forEach(function (movie) {
        const div = document.createElement("div");
        div.classList.add("movie");

        div.innerHTML =
          '<img src="' + movie.Poster + '">' +
          "<h3>" + movie.Title + "</h3>" +
          "<p>" + movie.Year + "</p>";

        results.appendChild(div);
      });
    });
});
