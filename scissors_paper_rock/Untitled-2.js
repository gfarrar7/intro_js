/*Create a welcome/landing page with a cowbboy background image and pop up stating 'Stick 'em partner' and a play button in index.html and style.css*/

/*Once play is pressed, pop up fades and a score count for player and computer/enemy is desplayed, along with a title saying 'Choose your weapon' and the 3 options*/

/*function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none' ;
    element.style.display = display;
}

function playGame() {
    this.toggleScreen("start", false)
    this.toggleScreen("game-container", true);
    let startDiv = document.getElementById("start");
    let gameContainer = document.getElementById("game-container");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameContainer.style.display = "block";
    gameOver.style.display = "none";
}*/


    /*Create 3 'weapon options' for player to select from, scissors, paper and rock index.html and style.css*/


    /*Create a function that randomly selects a weapon for the computer*/

    function computerChoice() {
            let getComputerChoice = Math.floor(Math.random() * 3);
            switch (getComputerChoice) {
                case 0:
                    return "SCISSORS";
                case 1:
                    return  "PAPER";
                case 2:
                    return "ROCK";
            }
    }
        
    /*Create 3 functions; one for if scissors beats paper, one for if paper beats rock, one for if rock beats scissors*/

    let playerScore = 0
    let computerScore = 0
    let roundWinner = ''

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            roundWinner = "tie";
        } else if (
            (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "ROCK" && computerSelection === "SCISSORS")
        ) {
            playerScore++;
            roundWinner = "player";
        } else {
            computerScore++;
            roundWinner = "computer";
        }
        updateScoreMessage(roundWinner, playerSelection, computerSelection)
    }

    /*Once player's choice is selected, create a function that compares it to the computer's selection*/

    function playerClick(playerSelection) {
        if (gameOver()) {
            openEndgameModal();
            return;
        }
        
        const computerSelection = computerChoice();
        playRound(playerSelection, computerSelection);
        updateBackground();
        updateScore();
        
        if (GameOver()) {
            openEndgameModal();
            setFinalMessage();
        }
    }

    let scissorsBtn = document.querySelector("#scissors");
    let paperBtn = document.querySelector("#paper");
    let rockBtn = document.querySelector("#rock");

    scissorsBtn.addEventListener("click", () => playerClick("#SCISSORS"));
    paperBtn.addEventListener("click", () => playerClick("#PAPER"));
    rockBtn.addEventListener("click", () => playerClick("#ROCK"));   

    /*If player wins, display a new POV background image and a pop up saying 'Shots Fired', then add a score to player's score count*/

    /*If computer wins, display the alternative background image and a pop up saying 'Critical Hit', then add a score to computer's score count*/
    
    let gameInfo = document.querySelector('#scoreInfo')
    let outcome = document.querySelector('#scoreMessage')
    let playerScorePara = document.querySelector('#player-score')
    let computerScorePara = document.querySelector('#computer-score')
    let img = document.querySelector("img");

    function updateBackground(roundWinner) {
        if (roundWinner === "player") {
            img.style.backgroundImage = url("./img/player-win.jpg")
        } else if (roundWinner === "computer") {
            img.style.backgroundImage = url("./img/computer-win.jpg")
        } else {
            return;
        }
    }

    function updateInfo() {
        if (roundWinner === "tie") {
          gameInfo.textContent = "TOO WELL MATCHED, IT'S A TIE";
        } else if (roundWinner === 'player') {
          gameInfo.textContent = "SHOTS FIRED, YOU WON!";
        } else if (roundWinner === 'computer') {
          gameInfo.textContent = "CRITICAL HIT, YOU LOST!";
        }
      
        playerScorePara.textContent = `YOUR HITS: ${playerScore}`
        computerScorePara.textContent = `ENEMY'S HITS: ${computerScore}`
      }
      
      function updateScoreMessage(winner, playerSelection, computerSelection) {
        if (winner === 'player') {
          outcome.textContent = `${playerSelection} BEATS ${computerSelection}`;
          return;
        } else if (winner === 'computer') {
            outcome.textContent = `${computerSelection} BEATS ${playerSelection}`;
            return;
        } else {
            outcome.textContent = `${playerSelection} TIES WITH ${computerSelection}`;
            return;
        }
    }


    /*Once selection has been played, return to home screen and again ask player to choose weapon*/

    /*First score count to 5 wins game*/

    function gameOver () {
        return playerScore === 5 || computerScore === 5;
    }

        

    /*If player wins, display pop up stating 'Congratulations, you are the fastest gun slinger in the West!' and a play again button*/

    /*If computer wins, display pop up stating 'Ouch! Better luck next time cowboy' and a play again button*/



    /*function computerWeaponSelection() {
        if (playGame === true) {
            const array = [scissors, paper, rock];

            function getComputerChoice(array) {
                return array[Math.floor(Math.random() * array.length)]
            }

            const computerChoice = getComputerChoice(array);
            console.log(computerChoice)
        }
    }

    function computerWeaponDeclare() {
        if (computerChoice === 1) {
            alert("SCISSORS");
        } else if (computerChoice === 2) {
            alert("PAPER");
        } else {
            alert("ROCK");
        }
    }*/