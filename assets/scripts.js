// setting up variables to navigate the DOM
var navBar = document.querySelector("nav");
var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer2");
var mainBox = document.getElementById("main");
var startBtn = document.getElementById("startbtn");
var gameName = document.getElementsByClassName("game-name");
var intro = document.getElementById("intro");
var answerbtns = document.getElementsByClassName("answerbuttons");
var qAnswers = document.getElementById('quiz-answers');
var input = document.getElementById("input-field");
var ansMessage = document.getElementById("right");
var submitBtn = document.getElementById("submit-button");
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
var theQuestions = 0;
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
    // mainBox.className = "results-page mt-5"
    gameName.textContent = "Question " + (questions = 1);
    gameName.setAttribute('class', 'h2');
    intro.textContent = questions[theQuestions].title;
    intro.className = 'h4';
    intro.setAttribute('style', 'border-top: 1px double #ba251a; padding-top: 20px;')
    
    quizAnswers.style.display = 'block';
    
    answerButtons[0].textContent = questions[theQuestions].choices[0];
    answerButtons[1].textContent = questions[theQuestions].choices[1];
    answerButtons[2].textContent = questions[theQuestions].choices[2];
    answerButtons[3].textContent = questions[theQuestions].choices[3]
    
    for (i = 0; i < answerbtns.length; i++) {
        answerbtns[i].addEventListener('click', answers);
    }

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
        if (theQuestions === 5) {
            timer.textContent = secondsLeft;
            clearInterval(timerInterval);
        }
    }, 1000);
};

function sendMessage() {
    qAnswers.style.display = "none";
    // mainBox.className = 'quiz-page mt-5'
    gameName.setAttribute("class", "h2");
    intro.setAttribute("style", "border-top: 0");
    intro.removeAttribute("class");
    intro.textContent = "Your Final Score is " + score + ". Enter your initials.";
    input.style.display = "block";

    if (timer <= 0) {
        gameName.textContent = "Time's Up!";

    } else {
        gameName.textContent = "Great Job.";
    }

    submitBtn.addEventListener("click", highScoreLoad);
}



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


startBtn.addEventListener('click', quizStr);



// function hideFirstTable() {

// };

// questionSwitch.addEventListener("click", function() {
//     if (questions[1].choices !== answerkey) {
//         s
//     }
// }); ;