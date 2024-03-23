// Create basic event listeners with help from love maths

// Wait for DOM to finish leading before starting the game
// Create button listeners

document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName("button");

    // Iterate over the different game type buttons
    for (let button of buttons) {
        button.addEventListener("click", function () {
            // "this" checks which button was clicked and saves it as "this" in current function
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                // "this" is now assigning, which game is going to be played
                let gaemType = this.getAttribute("data-type");
                runGame();
            }
        })
    }

    document.getElementById("guess-number").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            createRandomNumberLottery()
        }
    })
})

function runGame(gameType) {

};

function createRandomNumberDie() {
    let num1 = Math.ceil(Math.random() * 6 );
    console.log(num1);
};

//function createRandomNumberDecreasingOdds() {
//    
//};

function createRandomNumberLottery() {
    let num1 = Math.ceil(Math.random() * 49 );
    console.log(num1);
};

function checkAnswer() {
    alert("Submit and key listener works!")
};

function winningStreak() {

};

function incrementWrongAnswer() {

};

function highestStreak() {

};