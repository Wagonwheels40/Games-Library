document.addEventListener("DOMContentLoaded", function() {
  let addGameBtn = document.getElementById("add-platform-btn");
  let gamesTableBody = document.getElementById("games-table-body");
  let gamesLibrary = JSON.parse(localStorage.getItem("gamesLibrary")) || [];

  addGameBtn.addEventListener("click", addGame);

  function addGame() {
    // your code for adding a game goes here
  }
});