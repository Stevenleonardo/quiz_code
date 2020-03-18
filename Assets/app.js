//Establish globals
var timerEl = document.getElementById("timer")
var questionEl = document.getElementById("questions")
var startButton = document.getElementById("button")
startButton.textContent = "Start!"
var counter;

//Create area for instructions
var instructions = document.createElement("p");
instructions.setAttribute("class", "instructions");

//Create area for questions
var questionDiv = document.createElement("div");
questionDiv.setAttribute("id", "question-div");

//Create area for answers
var answers = document.createElement("ul");
answers.setAttribute("id", "answers");

//alerts
var correctAlert = document.createElement("div");
correctAlert.setAttribute("class", "alert alert-success");
correctAlert.textContent = "Correct"
var inCorrectAlert = document.createElement("div");
inCorrectAlert.setAttribute("class", "alert alert-danger")
inCorrectAlert.textContent = "incorrect"
//setup
var quiz = {
    //timer
    time: 10,
    //start at first question
    questionindex: 0,
    //number of correct answer
    correct: 0,
    //questions and answers
    questions: [
        {
            q: "Is Javascript one of the 3 languages of the web?",
            a: ["True", "false"],
            c: 0,
        },
        {
            q: "Is JQuery one of the 3 languages of the web?",
            a: ["True", "false"],
            c: 1,
        },
        {
            q: "Console.log is how developers check there code",
            a: ["True", "false"],
            c: 0,
        }
    ],

    startQuiz: function () {
        questionEl.innerHTML = "",
        //what question we are on
            quiz.questionindex = 0;
            //correct score
        quiz.correct = 0;
        //the amount of secs on our timer
        quiz.time = 10;
        //runs the function
        quiz.timeStart();
        // runs the function
        quiz.nextQuestion();

    },

    nextQuestion: function () {
        if (quiz.questionindex < quiz.questions.length) {
            // clears the question area
            questionDiv.innerHTML = "";
            //clears the answer area
            answers.innerHTML = "";
            //place in a variable to easily access
            var currentQuestion = quiz.questions[quiz.questionindex].q;
            //will show the current question on the page in a h2 header
            questionDiv.innerHTML = "<h2>" + currentQuestion + "<h2>"
            //Will place my questions into div
            questionEl.appendChild(questionDiv);
            // for loop for our answers
            for (var index = 0; index < quiz.questions[quiz.questionindex].a.length; index++) {
                var currentAnswer = quiz.questions[quiz.questionindex].a[index];
                var answerLi = document.createElement("li")
                // will add the text to the div
                answerLi.textContent = currentAnswer
                //give a class
                answerLi.setAttribute("class", "answerli")
                // set index
                answerLi.setAttribute("data", index)
                //will add the answers onto the page
                answers.appendChild(answerLi)
            }
            questionEl.appendChild(answers);
        }
        else {
            //emptys our questions area
            questionDiv.innerHTML = "";
            //emptys our answer area
            answers.innerHTML = "";
            //runs the function
            quiz.timeStop();
        }
    },
    timeStart: function () {
        //clears the timer
        clearInterval(counter);
        //time interval is set
        counter = setInterval(quiz.countDown, 1000);
    },

    timeStop: function () {
        //once the time stops it clears the counter
        clearInterval(counter)
    },
    countDown: function () {
        //timer to rundown
        quiz.time--;
        //show the time on the page
        timerEl.textContent = quiz.time + "seconds left";
        if (quiz.time < 1) {
            //resets the time to 10
            quiz.time = 10;
            //moves onto the next question
            quiz.questionindex++
            //runs the function 
            quiz.nextQuestion();

        }
    },
    getAnswer: function (e) {
        console.log(this.getAnswer);
        //placing a conditional with event.target to search for the user input
        if (e.target.matches("li")) {
                // set up the user answer id with the correct answer index
            if (e.target.matches("data") == quiz.questions[quiz.questionindex].c) {
                questionEl.appendChild(correctAlert);
                quiz.questionindex++;
                quiz.correct++;
                quiz.nextQuestion();
            }
            else {
                questionEl.appendChild(inCorrectAlert);
                quiz.time = 10;
                quiz.questionindex++;
                quiz.nextQuestion();
            }
        }
    }
}
console.log(quiz.startQuiz)
startButton.addEventListener("click", quiz.startQuiz);
answers.addEventListener("click", quiz.getAnswer);
