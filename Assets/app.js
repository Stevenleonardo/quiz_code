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
var answers = document.createElement("div")
answers.setAttribute("id","answers")


//setup
var Quiz = {
    //timer
    timer:15,
    //questions
    questionindex:0,
    questions: {
        q1: "Is Javascript of the 3 languages of the web?",
        a1: "True or false",
        q2: "Is the color of the sky blue?",
        a2: "True of false",
        q3: "Is the color of the water blue?",
        a3: "True or false",
    }
    init: function(){
    questionEl.appendChild(instructions)
    questionEl.appendChild(questions)        
    }
}

    }




}