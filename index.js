/*Create a welcome/landing page with a cowbboy background image and pop up stating 'Stick 'em partner' and a play button*/

/*Create 3 'weapon options', scissors, paper and rock*/

/*Create 3 functions; one for if scissors beats paper, one for if paper beats rock, one for if rock beats scissors*/

/*Once play is pressed, pop up fades and a score count for player and computer/enemy is desplayed, along with a title saying 'Choose your weapon' and the 3 options*/

/*Create a function that randomly selects a weapon for the computer*/

/*Once player's choice is selected, create a function that compares it to the computer's selection*/

/*If player wins, display a new POV background image and a pop up saying 'Shots Fired', then add a score to player's score count*/

/*If computer wins, display the alternative background image and a pop up saying 'Critical Hit', then add a score to computer's score count*/

/*Once selection has been played, return to home screen and again ask player to choose weapon*/

/*First score count to 5 wins game*/

/*If player wins, display pop up stating 'Congratulations, you are the fastest gun slinger in the West!' and a play again button*/

/*If computer wins, display pop up stating 'Ouch! Better luck next time cowboy' and a play again button*/

function playGame() {
    let startDiv = document.getElementById("start");
    let chooseWeapons = document.getElementById("choose-weapons");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    chooseWeapons.style.display = "block";
    gameOver.style.display = "none";
}

