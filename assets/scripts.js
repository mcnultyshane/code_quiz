var timer = document.querySelector("#timer")
var startBtn = document.querySelector(".startbtn")
var question = document.querySelector(".question")
var openScreenSwitch = document.querySelector("#openscreen");
var questionSwitch =document.querySelector(".nextquestion");
var mainEl = document.querySelector("#main")


startBtn.addEventListener("click", setTime);

var secondsLeft = 75;
var timerInterval ;

function setTime(){
timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Timer: "+ secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
    clearInterval(timerInterval);
      // Calls function to create and append image
    sendMessage();
    }

    }, 1000);
};

function sendMessage() {
    mainEl.textContent="Game Over."
};

setTime();
var questions = [
    {
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
        choices: ["numbers & strings", "booleans", "other arrays", "all of the above" ],
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
]

questionSwitch.addEventListener("click", function() {
    if (questions[1].choices !== answerkey) {

    }
});