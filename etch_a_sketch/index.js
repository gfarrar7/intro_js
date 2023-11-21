// Default settings //
const defaultColor = "black";
const defaultMode = "color";
const defaultSize = 50;

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


// Create container for grid and create grid //
const gridContainer = document.querySelector("#grid_container");



//cell.textContent = "select size: " cell + " x " + cell;//

function createGrid(cell) {
    for (let i = 0; i < cell * cell; i++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid");
            gridContainer.style.gridTemplateColumns = `repeat(${cell}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${cell}, 1fr)`;
            gridCell.addEventListener("mouseover", changeColor);
            gridCell.addEventListener("mousedown", changeColor);
            gridContainer.appendChild(gridCell);
        }
    }

createGrid(16);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

// Create colour button. Icon to be a paint palette //
const paletteBtn = document.querySelector("#palette-btn");

function chooseColor(e) {
    if (e.type === 'mouseover' && !mouseDown)
}

// Create size slider. Icons to be paint brushes //

// Create transparency slider. Icons to be a paint palettes //

// Create eraser button. Icon to be an eraser //

// Create clear canvas button. Icon to be cleaning supplies //   

// Create randomise colour button. Icon to be a question mark //

// Footer //