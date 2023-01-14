let container = document.querySelector(".container");

for (var i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = "grid-square";
    container.append(gridSquare);
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = "#6ebb95";
    })
}