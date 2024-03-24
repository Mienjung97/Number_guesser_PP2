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
                runGame(gameType);
            }
        });
    }

    document.getElementById("guess-number").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    })

    runGame("coin")
})

function runGame(gameType) {

    let num1 = Math.ceil(Math.random() * 2);
    let num2 = Math.ceil(Math.random() * 6);
    let num3 = Math.ceil(Math.random() * 49);


    if (gameType === "coin") {
        console.log(num1);
        let userGuess = parseInt(document.getElementById("guess-number").value);
        console.log(userGuess)
        coinFlipCheck(num1, userGuess);
    } else {
        alert("Doesnt work yet")
    }

};

function coinFlipCheck(realNumber, userGuess) {
    document.getElementById('number').textContent = realNumber;
    console.log(realNumber);
    console.log(userGuess);
    return realNumber, userGuess
};

function checkAnswer() {
    let real = parseInt(document.getElementById("number").value);
    console.log(real);
    let user = parseInt(document.getElementById("guess-number").value);
    console.log(user);
   // document.getElementById('number').textContent = realNumber;
   // console.log(realNumber)

    let correct = userGuess === realNumber;

    if (correct) {
        alert("amazing")
    } else {
        alert("wrong")
    }
    document.getElementById("guess-number").value = "";

};



/*---------------------------------------------------------------------------------------------------------------------------------------*/
function winningStreak() {

};

function incrementWrongAnswer() {

};

function highestStreak() {

};

// not yet functinal
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