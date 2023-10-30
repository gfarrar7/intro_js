/* HOME SCREEN FUNCTIONALITY:
- Create a welcome/landing page with a cowbboy background image and pop up stating 'Stick 'em partner' and a play button in index.html and style.css
- Once play is pressed, pop up fades and a score count for player and computer/enemy is desplayed, along with a title saying 'Choose your weapon' and the 3 options*/

function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none' ;
    element.style.display = display;
}

function playGame() {
    this.toggleScreen("start", false)
    this.toggleScreen("game-container", true);
    let startDiv = document.getElementById("start");
    let gameContainer = document.getElementById("game-container");
    let endgameModal = document.getElementById("endgameModal");
    startDiv.style.display = "none";
    gameContainer.style.display = "block";
    endgameModal1.style.display = "none";
    endgameModal2.style.display = "none";
}


    
/* GAME FUNCTIONALITY:
- Create 3 'weapon options' for player to select from, scissors, paper and rock index.html and style.css
- Create 3 functions; one for if scissors beats paper, one for if paper beats rock, one for if rock beats scissors
- Create a function that randomly selects a weapon for the computer
- Once player's choice is selected, create a function that compares it to the computer's selection
- If player wins, display a new POV background image and a pop up saying 'Shots Fired', then add a score to player's score count
- If computer wins, display the alternative background image and a pop up saying 'Critical Hit', then add a score to computer's score count
- Once selection has been played, return to home screen and again ask player to choose weapon
- First score count to 5 wins game*/

    let playerScore = 0
    let computerScore = 0
    let roundWinner = ''

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            roundWinner = "tie";
            playerScore++;
            computerScore++;
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
        updateOutcomeMessage(roundWinner, playerSelection, computerSelection)
    }

    function computerChoice() {
            let weapons = ["SCISSORS", "PAPER", "ROCK"];
            let getComputerChoice = weapons[Math.floor(Math.random() * weapons.length)];
            switch (getComputerChoice) {
                case "SCISSORS":
                    return "SCISSORS";
                case "PAPER":
                    return  "PAPER";
                case "ROCK":
                    return "ROCK";
            }
    }
        
    function gameOver () {
        return playerScore === 5 || computerScore === 5;
    }

    let gameInfo = document.querySelector(".game-info");
    let outcome = document.querySelector(".outcome");
    let playerScorePara = document.querySelector(".player-score");
    let computerScorePara = document.querySelector(".computer-score");
    let scissorsBtn = document.querySelector(".scissors");
    let paperBtn = document.querySelector(".paper");
    let rockBtn = document.querySelector(".rock");
    let endgameModal1 = document.querySelector("#endgameModal1")
    let endgameModal2 = document.querySelector("#endgameModal2")
    let endgameMsg1 = document.querySelector("#endgameMsg1")
    let endgameMsg2 = document.querySelector("#endgameMsg2")
    let overlay1 = document.querySelector("#overlay1")
    let overlay2 = document.querySelector("#overlay2")
    let restartBtn = document.querySelector(".btn-restart")
    let img = document.querySelector(".img");


    scissorsBtn.addEventListener("click", () => playerClick("SCISSORS"));
    paperBtn.addEventListener("click", () => playerClick("PAPER"));
    rockBtn.addEventListener("click", () => playerClick("ROCK"));   
    restartBtn.addEventListener('click', restartGame);
    overlay1.addEventListener('click', closeEndgameModal1);
    overlay2.addEventListener('click', closeEndgameModal2);


    function playerClick(playerSelection) {
        if (gameOver()) {
            if (playerScore === 5) {
                openEndgameModal1();
                return;
            } else if (computerScore === 5) {
                openEndgameModal2();
                return;
            }
        }
        
        const computerSelection = computerChoice();
        playRound(playerSelection, computerSelection);
        updateInfo();
        
        if (gameOver()) {
            return playerScore === 5
            ? (openEndgameModal1() + setFinalMessage1())
            : (openEndgameModal2() + setFinalMessage2()) 
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
      
      
    function updateOutcomeMessage(winner, playerSelection, computerSelection) {
        switch (winner) {
            case "tie":
                outcome.textContent = `${playerSelection} TIES WITH ${computerSelection}`;
                return;
            case "player":
                outcome.textContent = `${playerSelection} BEATS ${computerSelection}`;
                return;
            case "computer":
                outcome.textContent = `${computerSelection} BEATS ${playerSelection}`;
                return;
        }
    }

    function openEndgameModal1() {
        endgameModal1.classList.add('active')
        overlay1.classList.add('active')
        endgameModal1.style.display = "block";
    }
      
    function closeEndgameModal1() {
        endgameModal1.classList.remove('active')
        overlay1.classList.remove('active')
    }

    function openEndgameModal2() {
        endgameModal2.classList.add('active')
        overlay2.classList.add('active')
        endgameModal2.style.display = "block";
    }
    
    function closeEndgameModal2() {
        endgameModal2.classList.remove('active')
        overlay2.classList.remove('active')
    }
      
    function setFinalMessage1() {
        return endgameMsg1.textContent = "YEEHAW, YOU WON!";
    }

    function setFinalMessage2() {
        return endgameMsg2.textContent =  "RIP PARTNER, YOU LOST!";
    }
      
    function restartGame() {
        playerScore = 0;
        computerScore = 0;
        gameInfo.textContent = "CHOOSE YOUR WEAPON";
        outcome.textContent = "FIRST TO SCORE 5 SHOTS WINS";
        playerScorePara.textContent = "Player: 0"
        computerScorePara.textContent = "Computer: 0"
        endgameModal1.classList.remove('active');
        overlay1.classList.remove('active');
        endgameModal2.classList.remove('active');
        overlay2.classList.remove('active');
    }
  

   

        

    /*If player wins, display pop up stating 'Congratulations, you are the fastest gun slinger in the West!' and a play again button*/

    /*If computer wins, display pop up stating 'Ouch! Better luck next time cowboy' and a play again button*/


