let username;

/**
 * Eventlistener to load the DOM and change the game type
 * start with coin flip game
 */
document.addEventListener("DOMContentLoaded", function () {

    // Buttons for game types - code was higly inspired by "Love Maths" project
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            // Start Coin game (1 in 2 odds)
            if (this.getAttribute("data-type") === "coin") {
                runCoinGame();
                // Start die game (1 in 6 odds)
            } else if (this.getAttribute("data-type") === "die") {
                runDieGame();
            }
        });
    }

    alert("Please enter a username to begin!");
    document.getElementById("username").focus();

    document.getElementById("username").addEventListener("keydown", function () {
        let showSubmit = document.getElementById("usernamesubmit");
        showSubmit.classList.remove("hide");
    });

    /**
     * After entering a username, the Scoreboard gets updated, username input field gets cleared,
     * the game content starts with the coin game and 
     * focus shifts to guess input field
     */
    document.getElementById("usernamesubmit").addEventListener("click", function () {
        let beginGame = document.getElementById("begin");
        beginGame.classList.remove("hide");
        clearStreaks();
        scoreBoard();
        runCoinGame();
        document.getElementById("username").value = "";
        clear();
    });

    document.getElementById("username").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            document.getElementById("usernamesubmit").click();
        }
    });

});

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
/**
 * make the Enter key behave like the submit button
 */
document.getElementById("guess-number").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});

/**
 * Game one: guessing the right number with the odds of a coin flip (1 in 2)
 * functions for winning and loosing points are called
 * alerts for winning or loosing are in place
 */
function runCoinGame() {

    changeExplanation("coin");

    showDeleteButton();

    updateCell();

    // create random number between 1 and 2 to simulate a coin flip
    let randomNumber = Math.ceil(Math.random() * 2);
    // console.log for functionality test
    console.log(randomNumber);

    // make number show on page for further testing
    document.getElementById('number').textContent = randomNumber;

    // make submit button work
    document.getElementById("submit").onclick = (event) => onNumberSubmit(event, randomNumber, "coin");
}

function onNumberSubmit(event, randomNumber, gameType) {
    // get guess from user from input box
    let userGuess = parseInt(document.getElementById('guess-number').value);
    console.log(userGuess);

    // basic statement for checking the number
    let correct = userGuess === randomNumber;

    // correct statemant
    if (correct) {
        alert("Amazing, you got it! Now Try again.");
        winningStreak();
        highestStreak();
        if (gameType === "coin") {
            runCoinGame();
        } else {
            runDieGame();
        }

    } else {
        // alert for when no number is entered
        if (isNaN(userGuess)) {
            alert("Please enter a valid number");
            return;
        }

        if (gameType === "coin") {
            // messages for wrong answer
            alert("You are wrong");
            incrementWrongAnswer();
        } else {
            if (userGuess < (randomNumber - 1)) {
                alert("You are far too low.");
                incrementWrongAnswer();
            } else if (userGuess < randomNumber) {
                alert("You are too low, but close.");
                incrementWrongAnswer();
                // two messages for too high
            } else if (userGuess > (randomNumber + 1)) {
                alert("You are far too high.");
                incrementWrongAnswer();
            } else {
                alert("You are too high, but close.");
                incrementWrongAnswer();
            }
        }
    }
    clear();
}

/**
 * Game two: guessing the right number with the odds of rolling a die (1 in 6)
 * functions for winning and loosing points are called
 * alerts for winning and 4 indicators of how far off the guess is
 */
function runDieGame() {

    changeExplanation("die");


    // create random number between 1 and 6
    let randomNumber = Math.ceil(Math.random() * 6);
    // console.log for functionality test
    console.log(randomNumber);

    // make number show on page for further testing
    document.getElementById('number').textContent = randomNumber;

    // make submit button work
    document.getElementById("submit").onclick = (event) => onNumberSubmit(event, randomNumber, "die");
}

/**
 * Function to change outer apperance of game (explanation and logo)
 * depending on which game is selected
 */
function changeExplanation(gameType) {
    let explanation = document.getElementById("explanation").innerText;
    let pictureIdToShow, pictureIdToHide;
    if (gameType === "coin") {
        // next two lines of code change the explanation text for the coin toss
        explanation = "1 and 2, like a coin toss";
        // remove die logo
        pictureIdToHide = "logo-die";
        // make sure coin logo is still there
        pictureIdToShow = "logo-coin";
    } else {
        // next two lines of code change the explanation text for the die roll
        explanation = "1 and 6, like a die roll";
        document.getElementById("explanation").innerText = explanation;
        // toggle picture
        pictureIdToHide = "logo-coin";
        // make sure coin logo is still there
        pictureIdToShow = "logo-die";
    }

    document.getElementById("explanation").innerText = explanation;
    let picture1 = document.getElementById(pictureIdToHide);
    picture1.classList.add("hide");
    let picture2 = document.getElementById(pictureIdToShow);
    picture2.classList.remove("hide");
}

/**
 * clear the input field 
 */
function clear() {
    document.getElementById("guess-number").value = "";
    document.getElementById("guess-number").focus();
}

// basic idea for incrementing scores was taken from love maths 

/**
 * increments the current winning streak
 */
function winningStreak() {
    // gets old wins from webpage
    let oldWins = parseInt(document.getElementById("streak").innerText);
    // increments winning streak by one
    document.getElementById("streak").innerText = ++oldWins;
}

/**
 * increments the amount of wrong guesses
 * reduces "current streak" back to 0
 */
function incrementWrongAnswer() {
    // get old fail amount from webpage
    let oldFails = parseInt(document.getElementById("fails").innerText);
    // increases fail amount
    document.getElementById("fails").innerText = ++oldFails;

    // resets the winning streak back to 0
    let streak = parseInt(document.getElementById("streak").innerText);
    streak = 0;
    document.getElementById("streak").innerText = streak;
}

/**
 * Shows the highest streak achieved by the user, does not reset
 */
function highestStreak() {
    // get old highscore from webpage
    let oldStreak = parseInt(document.getElementById("biggest-streak").innerText);
    let currentWins = parseInt(document.getElementById("streak").innerText);
    if (oldStreak < currentWins) {
        document.getElementById("biggest-streak").innerText = currentWins;
    }
    updateCell();
}

/**
 * Scoreboard
 * Big help from Tutor Sarah to get the scores on the scoreboard working 
 * Creates new entry for every username
 */
function scoreBoard() {
    let table = document.getElementById("highscore");
    let row = table.insertRow(-1);
    let name = row.insertCell(-1);
    let score = row.insertCell(1);
    let streak = document.getElementById("biggest-streak").innerText;
    name.innerHTML = document.getElementById("username").value;
    score.innerHTML = streak;
    // Here the help starts

    username = document.getElementById("username").value;
    score.id = `${username}-score`;
    console.log(name);
    console.log(score);
}
/**
 * Updates the score of current user on the scoreboard if a new highscore has been achieved
 */
function updateCell() {
    let scoreCell = document.getElementById(`${username}-score`);
    let streak = document.getElementById("biggest-streak").innerText;

    scoreCell.innerHTML = streak;
    console.log(scoreCell);
}

/**
 * shows delete button after more than one user is existent
 */
function showDeleteButton() {
    let l = document.getElementById("highscore").rows.length;
    if (l > 1) {
        let showDelete = document.getElementById("delete")
        showDelete.classList.remove("hide");
    }
}
/**
 * function to delete the last added username and score
 */
function deleteRow() {
    let table = document.getElementById("highscore");
    let row = table.deleteRow(-1);
}
// end of text helped by sarah

// known Bug: if you enter the same username as before, it will reset the score
// additionally it will create the same username in table, but only increments the first one
function clearStreaks() {
    document.getElementById("fails").innerText = 0;
    document.getElementById("biggest-streak").innerText = 0;
    document.getElementById("streak").innerText = 0;
}