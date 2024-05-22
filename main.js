function createGrid(size) {
    let grid = document.querySelector(".grid");
    for(let i = 0; i < size; i++) {
        let row = document.createElement("div");
        for(let j = 0; j < size; j++) {
            let col = document.createElement("div");
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

createGrid(16);