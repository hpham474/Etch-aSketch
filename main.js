function createGrid(size) {
    const grid = document.querySelector(".grid");
    for(let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.height = `${100/gridSize}%`;
        for(let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.style.width = `${100/gridSize}%`;
            col.style.border = "1px solid grey";

            col.addEventListener("mouseenter", () => {
                col.style.backgroundColor = getRandomColor();
            });

            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

function validateGridSize() {
    if (gridSize >= 1 && gridSize <= 100) {
        return true;
    }
    return false;
}

function clearGrid() {
    const grid = document.querySelector(".grid");
    while(grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

let gridSize = 16;

const gridButton = document.querySelector(".size");
gridButton.addEventListener("click", () => {
    do {
    gridSize = prompt("Please enter a grid size (up to 100)", "16");
    if (!validateGridSize()) {
        alert("Please enter a valid size");
    }
    else {
        clearGrid();
        createGrid(gridSize);
    }
    } while (!validateGridSize());
});

createGrid(gridSize);