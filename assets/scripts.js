var timer = document.querySelector("#timer")
var startBtn = document.querySelector(".startbtn")
var question = document.querySelector(".question")
var openScreenSwitch = document.querySelector("#openscreen");
var questionSwitch =document.querySelector(".nextquestion")

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

