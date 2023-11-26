// Default settings //
        const defaultColor = "#e5ac5b";
        const defaultMode = "color";
        const defaultSize = 25;
        const defaultBkgrndColor = "#ffedca";

        let currentColor = defaultColor;
        let currentMode = defaultMode;
        let currentSize = defaultSize;
        let currentBkgrndColor = defaultBkgrndColor;

        function setCurrentColor(newColor) {
            currentColor = newColor;
        }

        function setCurrentMode(newMode) {
            currentMode = newMode;
        }

        function setCurrentSize(newSize) {
            currentSize = newSize;
        }

        function setCurrentBkgrndColor(newBkgrndColor) {
            currentBkgrndColor = newBkgrndColor;
        }

        // Allows user to hold down mouse and drag/draw as opposed to drawing when mouse glides over squares without holding down // 
        let mouseDown = false
        document.body.onmousedown = () => (mouseDown = true)
        document.body.onmouseup = () => (mouseDown = false)



// Left Menu Controls //
        // Color input button. Upon user clicking it, color palatte will appear and user can select color to be used as brush color //
        const colorBtn = document.querySelector("#color-btn");
        colorBtn.onclick = () => setCurrentMode("color");

        const colorInput = document.querySelector("#color-input");
        colorInput.oninput = (e) => setCurrentColor(e.target.value);

        // Randomise color button. Upon user clicking it, the brush  will populate a new color for each grid square it draws on //
        const randomBtn = document.querySelector("#random-btn");
        randomBtn.onclick = () => setCurrentMode("random");

        // Background color input button. Upon user clicking it, color palatte will appear and user can select color to be used as grid background //
        const canvasColor = document.querySelector("#canvas-color-input")
        canvasColor.oninput = (e) => {
        setCurrentBkgrndColor(e.target.value);
        gridContainer.style.backgroundColor = currentBkgrndColor;
    }



// Grid Controls //
        // Create container for grid and create grid that can change size within the allocated container size //
        const gridContainer = document.querySelector("#grid-container");
        createGrid(25);    

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

        // Function that changes each grid cell color depending on the selected function e.g. color, random, eraser etc //
        function changeColor(e) {
            if (e.type === "mouseover" && !mouseDown) return;
            else {
                if (e.type === "mouseover" && mouseDown || e.type === "click") {
                    switch (currentMode) {
                        case "color":
                            e.target.style.backgroundColor = currentColor;
                            break;
                        case "random":
                            const randomR = Math.floor(Math.random() * 256);
                            const randomG = Math.floor(Math.random() * 256);
                            const randomB = Math.floor(Math.random() * 256);
                            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                            break;
                        case "eraser":
                            e.target.style.backgroundColor = currentBkgrndColor;
                            break;
                        default:
                            return;
                    }
                }
            }
        }



// Right Menu Controls //
        // Eraser button. Upon user clicking it, the brush will act as an eraser as it will match the grid background color and appear to 'erase' the current grid color //
        const eraserBtn = document.querySelector("#eraser-btn");
        eraserBtn.onclick = () => setCurrentMode("eraser");

        // Clear canvas button. Upon user clicking it, the grid will be cleared and reloaded to its default properties // 
        function clearGrid() {
            gridContainer.innerHTML = " ";
        }

        function reloadGrid() {
            clearGrid();
            createGrid(currentSize);
        }

        const clearBtn = document.querySelector("#clear-btn");
        clearBtn.addEventListener("click", (e) => reloadGrid());

        // Create size slider. When user slides the circle to their preferred size, the grid will update to match this size //
        const sizeText = document.querySelector("#size-text");
        const sizeInput = document.querySelector("#size-range");
        sizeInput.oninput = (e) => changeSize(e.target.value);

        function changeSize(value) {
            setCurrentSize(value)
            updateSizeText(value)
            reloadGrid()
        }
        
        function updateSizeText(value) {
            sizeText.innerHTML = `size: ${value} x ${value}`
        }


// Override other functions, depending on the one selected //
        function activateButton(newMode) {
            if (currentMode === 'color') {
                colorBtn.classList.remove('active');
            } else if (currentMode === 'random') {
                randomBtn.classList.remove('active');
            } else if (currentMode === 'eraser') {
            eraserBtn.classList.remove('active');
            }
        
            if (newMode === 'color') {
                colorBtn.classList.add('active');
            } else if (newMode === 'random') {
                randomBtn.classList.add('active');
            } else if (newMode === 'eraser') {
            eraserBtn.classList.add('active');
            }
        }
