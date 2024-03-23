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
                let gameType = this.getAttribute("data-type");
                runGame();
            }
        })
    }

    document.getElementById("guess-number").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    })

    runGame("dice")
})

function runGame(gameType) {

    // The following two lines are copied from Love Maths
    // clear answer field after every submit
    // document.getElementById("guess-number").value = "";
    // Setting focus to submit box (after dubmitting new answer is ready to go)
    // document.getElementById("guess-number").focus();

    if (gameType === "dice") {
        
    } else {
        alert("Doesnt work yet")
    }

};

function RandomNumberDie() {
    let realNumber = Math.ceil(Math.random() * 6);
    console.log(realNumber);
    let userGuess = parseInt(document.getElementById("guess-number").value);
    console.log(userGuess);
    return realNumber, userGuess
};

//function createRandomNumberDecreasingOdds() {
//    
//};

function createRandomNumberLottery() {
    let num1 = Math.ceil(Math.random() * 49);
    console.log(num1);

};

function checkAnswer() {
    let realNumber = Math.ceil(Math.random() * 6);
    console.log(realNumber)
    let userGuess = parseInt(document.getElementById("guess-number").value);
    console.log(userGuess)
    let correct = userGuess === realNumber;

    if (correct) {
        alert("amazing")
    } else {
        alert("wrong")
    }
    document.getElementById("guess-number").value = "";

};

function winningStreak() {

};

function incrementWrongAnswer() {

};

function highestStreak() {

};