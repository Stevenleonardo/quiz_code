//Establish globals
var timerEl = document.getElementById("timer")
var questionEl = document.getElementById("questions")
var startbutton = document.createElement("button")

//Create area for instructions
var instructions = document.createElement("p")
instructions.setAttribute("class" , "instructions")

//Create area for questions
var questionDiv = document.createElement("div")
questionDiv.setAttribute("id" , "question-div")

//Create area for answers