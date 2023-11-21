// Default settings //
const defaultColor = "#e5ac5b";
const defaultMode = "color";
const defaultSize = 25;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMocde(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Create container for grid and create grid //
const gridContainer = document.querySelector("#grid-container");

function createGrid(cell) {
    for (let i = 0; i < cell * cell; i++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid");
            gridContainer.style.gridTemplateColumns = `repeat(${cell}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${cell}, 1fr)`;
            gridCell.addEventListener("mouseover", changeColor);
            gridCell.addEventListener("mousedown", changeColor);
            gridCell.addEventListener("click", changeColor);
            gridContainer.appendChild(gridCell);
        }
    }

createGrid(25);

//cell.textContent = "select size: " cell + " x " + cell;//


function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    else {
        if (e.type === "mouseover" && mouseDown || e.type === "click") {
            switch (currentMode) {
                case "rainbow":
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                    break;
                case "color":
                    e.target.style.backgroundColor = currentColor;
                    break;
                case "eraser":
                    e.target.style.backgroundColor = '#fefefe';
                    break;
                default:
                    return;
            }
        }
    }
}

// Create colour button. Icon to be a paint palette //
const paletteBtn = document.querySelector("#palette-btn");

paletteBtn.addEventListener("click", (e) => {
    let colorInput = document.createElement("input");
    colorInput.setAttribute(type, "color");
    return colorInput;
});

// Create size slider. Icons to be paint brushes //

// Create transparency slider. Icons to be a paint palettes //

// Create eraser button. Icon to be an eraser //

// Create clear canvas button. Icon to be cleaning supplies // 
function clearGrid() {
    gridContainer.innerHTML = " ";
}

function reloadGrid() {
    clearGrid();
    createGrid(currentSize);
}

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", (e) => reloadGrid());

// Create randomise colour button. Icon to be a question mark //

// Footer //