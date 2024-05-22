function createGrid(size) {
    let grid = document.querySelector(".grid");
    for(let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.height = `${100/gridSize}%`;
        for(let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.style.width = `${100/gridSize}%`;
            col.style.border = "1px solid grey";
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

const gridSize = 16;

createGrid(16);