// Create basic event listeners with help from love maths

// Wait for DOM to finish leading before starting the game
// Create button listeners

document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName("button");

    // Iterate over the different game type buttons
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gaemType = this.getAttribute("data-type");
                runGame();
            }
        })
    }

    document.getElementById("guess-number").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    })
})

function runGame() {

};

function createRandomNumber() {

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