/*Create a welcome/landing page with a cowbboy background image and pop up stating 'Stick 'em partner' and a play button in index.html and style.css*/

/*Create 3 'weapon options', scissors, paper and rock index.html and style.css*/

const scissors = 1;
const paper = 2;
const rock = 3;

/*Once play is pressed, pop up fades and a score count for player and computer/enemy is desplayed, along with a title saying 'Choose your weapon' and the 3 options*/

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
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    gameContainer.style.display = "block";
    gameOver.style.display = "none";
}
/*Create 3 functions; one for if scissors beats paper, one for if paper beats rock, one for if rock beats scissors*/

/*function scissorsWins {

}

function paperWins {
    
}

function rockWins {
    
}*/

/*Create a function that randomly selects a weapon for the computer*/

function gameScreen() {
    if (playGame === true) {
        const array = [scissors, paper, rock];

        function getComputerChoice(array) {
            return array[Math.floor(Math.random() * array.length)]
        }

        const computerChoice = getComputerChoice(array);
        console.log(computerChoice);
    } 
}



/*Once player's choice is selected, create a function that compares it to the computer's selection*/

/*If player wins, display a new POV background image and a pop up saying 'Shots Fired', then add a score to player's score count*/

/*If computer wins, display the alternative background image and a pop up saying 'Critical Hit', then add a score to computer's score count*/

/*Once selection has been played, return to home screen and again ask player to choose weapon*/

/*First score count to 5 wins game*/

/*If player wins, display pop up stating 'Congratulations, you are the fastest gun slinger in the West!' and a play again button*/

/*If computer wins, display pop up stating 'Ouch! Better luck next time cowboy' and a play again button*/





