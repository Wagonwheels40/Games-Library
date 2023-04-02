  document.addEventListener("DOMContentLoaded", function() {
    let addGameBtn = document.getElementById("add-platform-btn");
    let gamesTableBody = document.getElementById("games-table-body");
    let gamesLibrary = JSON.parse(localStorage.getItem("gamesLibrary")) || [];
  
    // populate table with existing data from local storage
    gamesLibrary.forEach(function(game) {
      let newRow = createGameRow(game);
      gamesTableBody.appendChild(newRow);
    });
  
    addGameBtn.addEventListener("click", addGame);
  
    // add event listeners for "keydown" event to input fields
    let titleInput = document.getElementById("title");
    let genreInput = document.getElementById("genre");
    let platformInput = document.getElementById("platform");
    titleInput.addEventListener("keydown", handleInputEnter);
    genreInput.addEventListener("keydown", handleInputEnter);
    platformInput.addEventListener("keydown", handleInputEnter);
  
    function addGame() {
      let title = titleInput.value;
      let genre = genreInput.value;
      let platform = platformInput.value;
  
      let newGame = {
        title: title,
        genre: genre,
        platform: platform
      };
  
      let newRow = createGameRow(newGame);
      gamesTableBody.appendChild(newRow);
      gamesLibrary.push(newGame);
      localStorage.setItem("gamesLibrary", JSON.stringify(gamesLibrary));
  
      titleInput.value = "";
      genreInput.value = "";
      platformInput.value = "";
    }
  
    function handleInputEnter(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        addGame();
      }
    }
  
    function createGameRow(game) {
      let newRow = document.createElement("tr");
      let titleCell = document.createElement("td");
      let genreCell = document.createElement("td");
      let platformCell = document.createElement("td");
      let removeButton = document.createElement("button");
  
      titleCell.textContent = game.title;
      genreCell.textContent = game.genre;
      platformCell.textContent = game.platform;
  
      removeButton.textContent = "Remove";
      removeButton.classList.add("btn", "btn-danger", "float-end", "remove-button");
      removeButton.addEventListener("click", function() {
        newRow.remove();
        let index = gamesLibrary.findIndex(function(item) {
          return item.title === game.title && item.genre === game.genre && item.platform === game.platform;
        });
        gamesLibrary.splice(index, 1);
        localStorage.setItem("gamesLibrary", JSON.stringify(gamesLibrary));
      });
  
      newRow.appendChild(titleCell);
      newRow.appendChild(genreCell);
      newRow.appendChild(platformCell);
      newRow.appendChild(removeButton);
  
      return newRow;
    }
  });
  
