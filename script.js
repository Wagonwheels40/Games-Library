  document.addEventListener("DOMContentLoaded", function() {

    let addGameBtn = document.getElementById("add-platform-btn");
    let gamesTableBody = document.getElementById("games-table-body");
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
    
        let editButton = document.createElement("button");
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-danger', 'float-end', 'edit-button');
        
        let newRow = document.createElement("tr");
        let titleCell = document.createElement("td");
        let genreCell = document.createElement("td");
        let platformCell = document.createElement("td");
        let removeButton = document.createElement("button");
        
        titleCell.textContent = newGame.title;
        genreCell.textContent = newGame.genre;
        platformCell.textContent = newGame.platform;
        
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-danger', 'float-end', 'remove-button');
        removeButton.addEventListener('click', function () {
            newRow.remove();
            let index = gamesLibrary.findIndex(game => game.title === newGame.title);
            gamesLibrary.splice(index, 1);
        });
    
        editButton.addEventListener("click", function() {
            if (editButton.textContent === "Edit") {
                let newTitleInput = document.createElement("input");
                newTitleInput.type = "text";
                newTitleInput.value = titleCell.textContent;
                titleCell.textContent = "";
                titleCell.appendChild(newTitleInput);
            
                let newGenreInput = document.createElement("input");
                newGenreInput.type = "text";
                newGenreInput.value = genreCell.textContent;
                genreCell.textContent = "";
                genreCell.appendChild(newGenreInput);
            
                let newPlatformInput = document.createElement("input");
                newPlatformInput.type = "text";
                newPlatformInput.value = platformCell.textContent;
                platformCell.textContent = "";
                platformCell.appendChild(newPlatformInput);
            
                editButton.textContent = "Save";
            } else {
                let newTitle = titleCell.querySelector("input").value;
                let newGenre = genreCell.querySelector("input").value;
                let newPlatform = platformCell.querySelector("input").value;
                let index = gamesLibrary.findIndex(game => game.title === newGame.title);
                gamesLibrary[index].title = newTitle;
                gamesLibrary[index].genre = newGenre;
                gamesLibrary[index].platform = newPlatform;
            
                titleCell.textContent = newTitle;
                genreCell.textContent = newGenre;
                platformCell.textContent = newPlatform;
            
                editButton.textContent = "Edit";
            }
        });
        
        newRow.appendChild(titleCell);
        newRow.appendChild(genreCell);
        newRow.appendChild(platformCell);
        newRow.appendChild(editButton);
        newRow.appendChild(removeButton);
        
        gamesTableBody.appendChild(newRow);
        gamesLibrary.push(newGame);
    }
});
