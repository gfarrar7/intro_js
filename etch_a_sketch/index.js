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

function setCurrentMode(newMode) {
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
                case "random":
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                    break;
                case "color":
                    e.target.style.backgroundColor = currentColor;
                    break;
                case "eraser":
                    e.target.style.backgroundColor = '#ffedca';
                    break;
                default:
                    return;
            }
        }
    }
}

// Create colour button. Icon to be a paint palette //
const colorBtn = document.querySelector("#color-btn");
colorBtn.onclick = () => setCurrentMode("color");

const colorInput = document.querySelector("#color-input");
colorInput.oninput = (e) => setCurrentColor(e.target.value);


// Create size slider. Icons to be paint brushes //
const sizeText = document.querySelector("#size-text");
const sizeInput = document.querySelector("#size-range");
sizeInput.oninput = (e) => changeSize(e.target.value);

function changeSize(value) {
    setCurrentSize(value)
    updateSizeText(value)
    reloadGrid()
  }
  
  function updateSizeText(value) {
    sizeText.innerHTML = `${value} x ${value}`
  }

// Create transparency slider. Icons to be a paint palettes //

// Create eraser button. Icon to be an eraser //
const eraserBtn = document.querySelector("#eraser-btn");
eraserBtn.onclick = () => setCurrentMode("eraser");

function activateButton(newMode) {
    if (currentMode === 'random') {
      randomBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'random') {
      randomBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

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
const randomBtn = document.querySelector("#random-btn");
randomBtn.onclick = () => setCurrentMode("random");

// Footer //