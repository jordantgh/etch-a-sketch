let container = document.querySelector(".container");

let root = document.querySelector(":root");

function game() {
    let h = getComputedStyle(root).getPropertyValue("--h");
    for (var i = 0; i < (h*h); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = "grid-square";
        container.append(gridSquare);
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = "#232524";
        })
    }
}

let sizeAlert = document.querySelector("#set-size");
sizeAlert.addEventListener('click', () => {
    let h = prompt("Enter number of cells per side: ");
    root.style.setProperty("--h", h);
    document.querySelectorAll(".grid-square").forEach(s => s.remove());
    game();
})

let refreshGrid = document.querySelector("#refresh");
refreshGrid.addEventListener('click', () => {
    document.querySelectorAll(".grid-square").forEach(s => s.remove());
    game();
})

game();