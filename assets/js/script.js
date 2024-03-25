// Wait for DOM to finish leading before starting the game

document.addEventListener("DOMContentLoaded", function () {
    runGame()
});


function runGame() {

    // create random number between 1 and 6
    let num1 = Math.ceil(Math.random() * 6);
    // console.log for functionality test
    console.log(num1);

    // make number show on page for further testing
    document.getElementById('number').textContent = num1;

};

function winningStreak() {

};

function incrementWrongAnswer() {

};

function highestStreak() {

};