let addGameBtn = document.getElementById("add-platform-btn");
let gamesTableBody = document.getElementById("games-table-body");
const removeButton = document.getElementById("remove-button");
let gamesLibrary = [];

addGameBtn.addEventListener("click", addGame);

function addGame() {
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let platform = document.getElementById("platform").value;

    let newGame = {
        title: title,
        genre: genre,
        platform: platform
    };

    gamesLibrary.push(newGame);

    let newRow = document.createElement("tr");
    let titleCell = document.createElement("td");
    let genreCell = document.createElement("td");
    let platformCell = document.createElement("td");

    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    removeButton.classList.add('btn', 'btn-outline-danger', 'float-end', 'remove-button');
    removeButton.addEventListener("click", function() {
        gamesTableBody.removeChild(newRow);
    });

    titleCell.textContent = title;
    genreCell.textContent = genre;
    platformCell.textContent = platform;

    newRow.appendChild(titleCell);
    newRow.appendChild(genreCell);
    newRow.appendChild(platformCell);
    newRow.appendChild(removeButton);

    gamesTableBody.appendChild(newRow);
}

// The issue with the code is that you are trying to append the removeButton to an undefined variable newItem, which is not created in the code. You should append the removeButton to the newRow instead. Here's the corrected code: //
