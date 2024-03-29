let username;
/**
 * Eventlistener to load the DOM and change the game type
 * start with coin flip game
 */
document.addEventListener("DOMContentLoaded", function () {

    refreshScoreboard();

    // focus on username input
    const userNameNode = document.getElementById("username");
    userNameNode.focus();

    /**
     * After entering a username, the Scoreboard gets updated, username input field gets hidden,
     * scoreboard gets loaded from local storage (if existent)
     * the game content starts with the coin game and 
     * focus shifts to guess input field
     */
    document.getElementById("usernamesubmit").addEventListener("click", function () {
        let beginGame = document.getElementById("begin");
        beginGame.classList.remove("hide");

        username = userNameNode.value;
        // hides input field for username after adding one
        document.getElementById("username-input").classList.add("hide");

        // pre work for loading local storage
        let scoreboardData = JSON.parse(localStorage.getItem("high-scores") || "[]");

        // checks if username already exists - if yes, you will continue with username, if not, it will create new entry
        const userNameExists = scoreboardData.filter(score => score.username === username).length > 0;
        let dataToWrite = [...scoreboardData];
        if (!userNameExists) {
            dataToWrite = [...dataToWrite, {
                username,
                score: 0
            }];
        }
        // loading from local storage
        localStorage.setItem("high-scores", JSON.stringify(dataToWrite));

        resetStreaksValue();
        // refreshScoreboard has to be run again, first time for getting the data, second time to write it down
        refreshScoreboard();
        runCoinGame();
        clear();
    });

    // make "Enter" key behave like submit
    userNameNode.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            document.getElementById("usernamesubmit").click();
        }
    });

    // Buttons for game types - code was higly inspired by "Love Maths" project
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            // make const to remove dublicate code
            const buttonType = this.getAttribute("data-type");
            // Start Coin game (1 in 2 odds)
            if (buttonType === "coin") {
                runCoinGame();
                // Start die game (1 in 6 odds)
            } else if (buttonType === "die") {
                runDieGame();
            }
        });
    }

    document.getElementById("username").addEventListener("keydown", function () {
        let showSubmit = document.getElementById("usernamesubmit");
        showSubmit.classList.remove("hide");
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

    // create random number between 1 and 2 to simulate a coin flip
    let randomNumber = Math.ceil(Math.random() * 2);
    // console.log for functionality test
    console.log(randomNumber);

    // make number show on page for further testing
    document.getElementById('number').textContent = randomNumber;

    // make submit button work
    document.getElementById("submit").onclick = (event) => onNumberSubmit(event, randomNumber, "coin");
}

/**
 * Basic code for checking the numbers depending on which game is played
 * Mentor Akshat Garg helped splitting two seperate game functions into 
 * two functions that will not show dublicate code
 */
function onNumberSubmit(event, randomNumber, gameType) {
    // get guess from user from input box
    let userGuess = parseInt(document.getElementById('guess-number').value);

    // basic statement for checking the number
    let correct = userGuess === randomNumber;

    // correct statemant
    if (correct) {
        //alert("Amazing, you got it! Now Try again.");
        modal(1);

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
            modal(2);
            incrementWrongAnswer();
        } else {
            if (userGuess < (randomNumber - 1)) {
                modal(5);
                incrementWrongAnswer();
            } else if (userGuess < randomNumber) {
                modal(6);
                incrementWrongAnswer();
                // two messages for too high
            } else if (userGuess > (randomNumber + 1)) {
                modal(3);
                incrementWrongAnswer();
            } else {
                modal(4);
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
 * Code was greatly revised by my mentor to make local storage possible
 * Creates new entry for every username
 */
function refreshScoreboard() {
    let table = document.getElementById("highscore");

    // 1st delete all the rows
    let numberOfRows = table.rows.length;
    while (numberOfRows--) {
        table.deleteRow(-1);
    }

    // Recerate table here
    let highScores = JSON.parse(localStorage.getItem("high-scores") || "[]");
    highScores.sort((scoreA, scoreB) => scoreB.score - scoreA.score);
    for (const eachScore of highScores) {
        let row = table.insertRow(-1);
        let name = row.insertCell(-1);
        let score = row.insertCell(1);

        name.innerHTML = eachScore.username;
        score.innerHTML = eachScore.score;
        score.id = `${eachScore.username}-score`;
    }
}

/**
 * Updates the score of current user on the scoreboard if a new highscore has been achieved
 * saves scoreboard to local storage (created with help from my mentor)
 */
function updateCell() {
    let scoreCell = document.getElementById(`${username}-score`);
    let streak = document.getElementById("biggest-streak").innerText;

    scoreCell.innerHTML = streak;

    const userScore = {
        username: username,
        score: streak
    };
    // saves scoreboard to local storage via JSON and sorts highscores
    let scoreboardData = JSON.parse(localStorage.getItem("high-scores") || "[]");
    scoreboardData = [{
        ...userScore
    }, ...scoreboardData.filter(score => score.username !== username)].sort((scoreA, scoreB) => scoreA.score > scoreB.score);
    localStorage.setItem("high-scores", JSON.stringify(scoreboardData));

    refreshScoreboard();
}

/**
 * reset all streaks with new username
 */
function resetStreaksValue() {
    document.getElementById("fails").innerText = 0;
    document.getElementById("biggest-streak").innerText = 0;
    document.getElementById("streak").innerText = 0;
}

/**
 * Function to display Infos on how the user did via modial pop up
 */
function modal(num) {

    let modal = document.getElementById("modal");
    modal.style.display = 'block';
    modal.classList.remove("hide");

    message = document.getElementById("modal-message");

    if (num === 1) {
        message.innerText = "You are right.";
    } else if (num === 2) {
        message.innerText = "You are wrong.";
    } else if (num === 3) {
        message.innerText = "You are too high.";
    } else if (num === 4) {
        message.innerText = "You are high, but close.";
    } else if (num === 5) {
        message.innerText = "You are too low.";
    } else {
        message.innerText = "You are low, but close.";
    }

    // Closing the modial 
    let button = document.getElementById("close");

    button.addEventListener("click", function () {
        modal.classList.add("hide");
        modal.style.display = "none";
        document.getElementById("guess-number").focus();
    });
    button.focus();

    // listen for keyup event
    document.addEventListener("keyup", () => {
        // if the modal is on the page
        if (modal) {
            // get its display style value
            const display = window.getComputedStyle(modal).getPropertyValue("display");
            // if the value is a block
            if (display === 'block') {
                // set the display to none
                modal.style.display = 'none';
            }
        }
    }, {once: true});
}