// Wait for DOM to finish leading before starting the game

document.addEventListener("DOMContentLoaded", function () {
    runGame()
});

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// make the Enter key behave like the submit button
document.getElementById("guess-number").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
      }
    }
)

function runGame() {

    // create random number between 1 and 6
    let num1 = Math.ceil(Math.random() * 6);
    // console.log for functionality test
    console.log(num1);

    // make number show on page for further testing
    document.getElementById('number').textContent = num1;

    // make submit button work
    document.getElementById("submit").onclick = function () {

        // get guess from user from input box
        let userGuess = parseInt(document.getElementById('guess-number').value);
        console.log(userGuess)

        // basic statement for checking the number
        let correct = userGuess === num1;

        // correct statemant
        if (correct) {
            alert("Amazing, you got it! Now Try again.");
            winningStreak();
            highestStreak();
            runGame();
        } else {
            // alert for when no number is entered
            if (isNaN(userGuess)) {
                alert("Please enter a valid number");
            // two messages for too low
            } else if (userGuess < (num1 - 1)) {
                alert("You are far too low.")
                incrementWrongAnswer()
            } else if (userGuess < num1) {
                alert("You are too low, but close.")
                incrementWrongAnswer()
            // two messages for too high
            } else if (userGuess > (num1 + 1)) {
                alert("You are far too high.")
                incrementWrongAnswer()
            } else {
                alert("You are too high, but close.")
                incrementWrongAnswer()
            }
        }
        // clear the input field 
        document.getElementById("guess-number").value = "";
    };
};

function winningStreak() {
    // gets old wins from webpage
    let oldWins = parseInt(document.getElementById("streak").innerText)
    // increments winning streak by one
    document.getElementById("streak").innerText = ++oldWins
};

function incrementWrongAnswer() {
    // get old fail amount from webpage
    let oldFails = parseInt(document.getElementById("fails").innerText)
    // increases fail amount
    document.getElementById("fails").innerText = ++oldFails

    // resets the winning streak back to 0
    let streak = parseInt(document.getElementById("streak").innerText);
    streak = 0;
    document.getElementById("streak").innerText = streak;
};

function highestStreak() {

};