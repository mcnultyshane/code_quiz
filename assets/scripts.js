// setting up variables to navigate the DOM
var navBar = document.querySelector("nav");
var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer2");
var mainBox = document.getElementById("main");
var startBtn = document.getElementById("startbtn");
var gameName = document.getElementsByClassName("game-name");
var intro = document.getElementById("intro");
var answerbtns = document.getElementsByClassName("answerbuttons");
var input = document.getElementById("input-field");
var ansMessage = document.getElementsById("right-wrong");
var submitBtn = document.getElementsByID("submit-button");
var initials = document.getElementById("initials");

// setting up questions array
var questions = [{
        questionTitle: "Commonly used data types DO NOT include the following: ",
        choices: ["string", "booleans", "alerts", 'numbers'],
        answerkey: "alerts"
    },
    {
        questionTitle: "Conditions of an 'if/else' are enclosed within: ",
        choices: ["'quotes'", "curly brackets '{}'", "parenthesis '()'", "square brackets '[]'"],
        answerkey: "curly brackets '{}'"
    },
    {
        questionTitle: "Arrays in Javascript can be used to store: ",
        choices: ["numbers & strings", "booleans", "other arrays", "all of the above"],
        answerkey: "all of the above"
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["Javascript", "terminal bash", "for loops", "console.log"],
        answerkey: "console.log"
    },
    {
        questionTitle: "String values must be enclosed within ______ when being assided to variables. ",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answerkey: "quotes"
    }
];

// setting up clock timer
startBtn.addEventListener("click", setTime);

var score = 0;
var question = 0;
var secondsLeft = 50;
var timerInterval;
var sArray = [];
var timeOff = 10;

function quizStr() {
    // sets timer
    timer.textContent = secondsLeft;
    setTime();

    nextQuestion();

    startBtn.style.display = "none";
}

function nextQuestion() {
    // mainBox.className =

};

function answers() {

};

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft + " seconds left";

        if (secondsLeft < 1) {
            timer.textContent = 0;
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        };
        if (question === 5) {
            timer.textContent = secondsLeft;
            clearInterval(timerInterval);
        }
    }, 1000);
};

function sendMessage() {
    mainEl.textContent = "Game Over."
};

function highScoreLoad(event) {
    event.preventDefault();

    if (initials.nodeValue.lenght === 0) {
        return

    } else {
        newScore = {
            userName: initials.nodeValue.trim(),
            userScore: score
        };
        sArray.push(newScore);

        sArray.sort((a, b) => b.userScore - a.userScore);

        localStorage.setItem('score', JSON.stringify(scoreArray));

        highScoreShow();

    }
};

function highScoreShow() {
    storedScores = JSON.parse(localStorage.getItem('score'));

    if (storedScores !== null) {
        sArray = storedScores;

        return sArray;
    }
};

function highScorePull() {
    if (timerInterval) {
        clearInterval(timerInterval);
    };

    // create new list and button elements and append them to container





    // hide nav (etc)
    startBtn.style.display = "none";
    navBar.style.visibility = "hidden";
    gameName.textContent = "High Scores";
    intro.textContent = "";
    intro.setAttribute('style', 'border-top: 0');
    answerkey.style.display = 'none';
    input.style.display = 'none';

    for (i = 0; i < sArray.length; i++) {
        let score = sArray[i].userName + ' : ' + sArray[i].userScore;

        li = document.createElement('li');
        li.textContent = score;
        ul.appendChild(li);
    }

    returnButton.addEventListener('click', function () {
        location,
        href = "index.html"
    });

    clearButton.addEventListener('click', function () {
        localStorage.clear();
        ul.innerHTML = "";
    });

};

// function hideFirstTable() {

// };

// questionSwitch.addEventListener("click", function() {
//     if (questions[1].choices !== answerkey) {
//         s
//     }
// }); ;