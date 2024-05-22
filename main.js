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

const gridSize = 16;

createGrid(16);