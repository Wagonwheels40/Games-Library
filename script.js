let addGameBtn = document.getElementById("add-platform-btn");
let gamesTableBody = document.getElementById("games-table-body");
let gamesLibrary = [];

addGameBtn.addEventListener("click", addGame);

function saveGames() {
    localStorage.setItem("gamesLibrary", JSON.stringify(gamesLibrary));
}

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
    saveGames();

    let newRow = document.createElement("tr");
    let titleCell = document.createElement("td");
    let genreCell = document.createElement("td");
    let platformCell = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    removeButton.classList.add('btn', 'btn-outline-danger', 'float-end', 'remove-button');
    removeButton.addEventListener("click", function() {
        gamesTableBody.removeChild(newRow);
        let index = gamesLibrary.findIndex(game => game.title === titleCell.textContent);
        gamesLibrary.splice(index, 1);
        saveGames();
    });

    titleCell.textContent = newGame.title;
    genreCell.textContent = newGame.genre;
    platformCell.textContent = newGame.platform;
    newRow.appendChild(titleCell);
    newRow.appendChild(genreCell);
    newRow.appendChild(platformCell);
    newRow.appendChild(removeButton);
    gamesTableBody.appendChild(newRow);
}

window.addEventListener("load", function() {
    let savedGames = JSON.parse(localStorage.getItem("gamesLibrary"));
    if (savedGames) {
        gamesLibrary = savedGames;
        for (let i = 0; i < gamesLibrary.length; i++) {
            let game = gamesLibrary[i];
            let newRow = document.createElement("tr");
            let titleCell = document.createElement("td");
            let genreCell = document.createElement("td");
            let platformCell = document.createElement("td");
            let removeButton = document.createElement("button");
            removeButton.textContent = 'Remove';
            removeButton.classList.add('btn', 'btn-outline-danger', 'float-end', 'remove-button');
            removeButton.addEventListener("click", function() {
                gamesTableBody.removeChild(newRow);
                let index = gamesLibrary.findIndex(game => game.title === titleCell.textContent);
                gamesLibrary.splice(index, 1);
                saveGames();
            });

            titleCell.textContent = game.title;
            genreCell.textContent = game.genre;
            platformCell.textContent = game.platform;
            newRow.appendChild(titleCell);
            newRow.appendChild(genreCell);
            newRow.appendChild(platformCell);
            newRow.appendChild(removeButton);
            gamesTableBody.appendChild(newRow);
        }
    }
});


const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.parentNode.parentNode;
        row.remove();
        let title = row.childNodes[0].textContent;
        gamesLibrary = gamesLibrary.filter(game => game.title !== title);
        saveGames();
    });
});
