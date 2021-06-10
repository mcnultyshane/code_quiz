// setting up variables to navigate the DOM
var navBar = document.querySelector("nav");
var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var mainBox = document.getElementById("container");
var startBtn = document.getElementById("startbtn");
var title = document.getElementById("title");
var text = document.getElementById("intro");
var answerbtns = document.getElementsByClassName("answer-button");
var qAnswers = document.getElementById('quiz-answers');
var input = document.getElementById("input-field");
var ansMessage = document.getElementById("right");
var submitBtn = document.getElementById("submit-button");
var initials = document.getElementById("initials");

// setting up questions array
var questions = [{
        title: "Commonly used data types DO NOT include the following: ",
        choices: ["string", "booleans", "alerts", 'numbers'],
        answerkey: "alerts"
    },
    {
        title: "Conditions of an 'if/else' are enclosed within: ",
        choices: ["'quotes'", "curly brackets '{}'", "parenthesis '()'", "square brackets '[]'"],
        answerkey: "curly brackets '{}'"
    },
    {
        title: "Arrays in Javascript can be used to store: ",
        choices: ["numbers & strings", "booleans", "other arrays", "all of the above"],
        answerkey: "all of the above"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["Javascript", "terminal bash", "for loops", "console.log"],
        answerkey: "console.log"
    },
    {
        title: "String values must be enclosed within ______ when being assided to variables. ",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answerkey: "quotes"
    }
];

// setting up clock timer
var score = 0;
var theQuestions = 0;
var secondsLeft = 0;
var sArray = [];
var timerInterval = false;



function quizStr() {
    // sets timer
    secondsLeft = 50;
    timer.textContent = secondsLeft;
    
    // starts countdown
    setTime();

    // starts question page
    nextQuestion();

    // makes the start button disappear
    startBtn.style.display = "none";
};

// changes display to the next question
function nextQuestion() {

    // change appearance of page
    mainBox.className = "results-page mt-5"
    title.textContent = "Question " + (theQuestions = 1);
    title.setAttribute('class', 'h2');
    text.textContent = questions[theQuestions].title;
    text.className = 'h4';
    text.setAttribute('style', 'border-top: 1px double #ba251a; padding-top: 20px;')

    // display the answer buttons
    qAnswers.style.display = 'block';


    // take the answer options from the current index in the questions array and assigns them one by one to each of the answer buttons.  
    answerbtns[0].textContent = questions[theQuestions].choices[0];
    answerbtns[1].textContent = questions[theQuestions].choices[1];
    answerbtns[2].textContent = questions[theQuestions].choices[2];
    answerbtns[3].textContent = questions[theQuestions].choices[3];

    // clicking one of the buttons calls the anwsers () function
    for (i = 0; i < answerbtns.length; i++) {
        answerbtns[i].addEventListener('click', answers);
    }

};

function answers(event) {
    // if selection is correct displays correct and increases score and theQuestions variables
    if (event.target.textContent === questions[theQuestions].answerkey) {
        ansMessage.style.display = 'block';
        ansMessage.textContent = 'Correct!';
        ansMessage.className = 'answer-message';
        theQuestions++;
        score++;
        console.log(score);
        nextQuestion();

        // right or wrong message appears and disappears
        setTimeout(function () {
            ansMessage.style.display = 'none';
        }, 800);

        // end game if current question is 4
        if (theQuestions === questions.length) {
            sendMessage();

            // else go to next question
        } else {
            nextQuestion();
        };

        // if selection is incorrect displays incorrect and decreases total time and increases theQuestions
    } else {
        theQuestions++;
        ansMessage.style.display = 'block';
        ansMessage.textContent = 'Incorrect!';
        ansMessage.className = 'answer-message';

        // message disappears after set time
        setTimeout(function () {
            ansMessage.style.display = 'none';
        }, 800);

        // ends game if timer is less than 10 seconds.
        if (secondsLeft < 10) {
            secondsLeft -= 10;
            sendMessage();

            // ends game if user is on the last question
        } else if (theQuestions === 4) {
            sendMessage();

            // else subtracts time from timer and moves onto next question
        } else {
            secondsLeft -= 10;
            nextQuestion();
        };
    }
};
// building message for GameOver Screen
function sendMessage() {
    qAnswers.style.display = "none";
    mainBox.className = 'quiz-page mt-5'
    title.setAttribute("class", "h2");
    text.setAttribute("style", "border-top: 0");
    text.removeAttribute("class");
    text.textContent = "Your Final Score is " + score + ". Enter your initials.";
    input.style.display = "block";

    if (secondsLeft <= 0) {
        title.textContent = "Time's Up!";

    } else {
        title.textContent = "Great Job.";
    }

    submitBtn.addEventListener("click", highScoreLoad);
};
// building function for storing scores and initials to local data
function highScoreLoad(event) {
    event.preventDefault();

    if (initials.value.length === 0) {
        return;

    } else {
        gameScore = {
            userName: initials.value.trim(),
            userScore: score
        };
        sArray.push(gameScore);

        sArray.sort((a, b) => b.userScore - a.userScore);

        localStorage.setItem('score', JSON.stringify(sArray));

        highScorePull();

    }
};
// building funtion for pulling the local storage data
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

    // creates new list and button elements and appends them to container
    container.className = 'score-page mt-5 card bg-light p-4';
    let ul = document.createElement('ul');
    let returnButton = document.createElement('button');
    let clearButton = document.createElement('button');
    returnButton.textContent = 'Go Back';
    clearButton.textContent = 'Clear High Scores';
    container.appendChild(ul);
    container.appendChild(returnButton);
    container.appendChild(clearButton);

    // hide nav (etc)
    startBtn.style.display = "none";
    navBar.style.visibility = "hidden";
    title.textContent = "High Scores";
    text.textContent = "";
    text.setAttribute('style', 'border-top: 0');
    qAnswers.style.display = 'none';
    input.style.display = 'none';

    for (i = 0; i < sArray.length; i++) {
        let score = sArray[i].userName + ' : ' + sArray[i].userScore;

        li = document.createElement('li');
        li.textContent = score;
        ul.appendChild(li);
    }

    returnButton.addEventListener('click', function () {
        location.href = "index.html"
    });

    clearButton.addEventListener('click', function () {
        localStorage.clear();
        ul.innerHTML = "";
    });

};

// building funtion for timer
function setTime() {
    timerInterval = setInterval(function () {
        timer.textContent = secondsLeft ;
        secondsLeft--;

        if (secondsLeft < 1) {
            timer.textContent = 0;
            clearInterval(timerInterval);
            sendMessage();
        };
        if (theQuestions === 5) {
            timer.textContent = secondsLeft;
            clearInterval(timerInterval);
        }
    }, 1000);
};

// event listeners for when you click the start button
startBtn.addEventListener('click', quizStr);
startBtn.addEventListener("click", setTime);

// loads parsed local storage data into score array
highScoreShow();

// event listener for when you click highscores link in navbar
highScore.addEventListener('click', highScorePull);