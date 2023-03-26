let gamesLibrary = [
    {
        title: "Resident Evil",
        genre: "Survival-Horror",
        platform: "PC"
    },
    {
        title: "Counter Strike",
        genre: "Shooter",
        platform: "PC"
    }
];

let addGameBtn = document.getElementById("add-game-btn");
let gamesTableBody = document.getElementById("games-table-body");


function addGame() {
    let title = prompt("Enter the title of the game:");
    let genre = prompt("Enter the genre of the game:");
    let platform = prompt("Enter the platform of the game:");

    let newGame = {
        title: title,
        genre: genre,
        platform
    };

    gamesLibrary.push(newGame);
}
