//Establish globals
var timerEl = document.getElementById("timer")
var questionEl = document.getElementById("questions")
var startButton = document.getElementById("button")
startButton.textContent = "Answer the questions before the timer runs out!"
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
    time: 15,
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
            quiz.questionindex = 0;
        quiz.correct = 0;
        quiz.time = 15;
        quiz.timeStart();
        quiz.nextQuestion();

    },

    nextQuestion: function () {
        if (quiz.questionindex < quiz.questions.length) {
            questionDiv.innerHTML = "";
            answers.innerHTML = "";
            var currentQuestion = quiz.questions[quiz.questionindex].q;
            questionDiv.innerHTML = "<h3>" + currentQuestion + "<h3>"
            var content = document.getElementById("questions");
            content.appendChild(questionDiv);
            for (var index = 0; index < quiz.questions[quiz.questionindex].a.length; index++) {
                var currentAnswer = quiz.questions[quiz.questionindex].a[index];
                var answerLi = document.createElement("li")
                answerLi.textContent = currentAnswer
                answerLi.setAttribute("class", "answerli")
                answerLi.setAttribute("data", index)
                answers.appendChild(answerLi)
            }
            content.appendChild(answers);
        }
        else {
            questionDiv.innerHTML = "";
            answers.innerHTML = "";
            quiz.timeStop();
        }
    },
    timeStart: function () {
        clearInterval(counter);
        counter = setInterval(quiz.countDown, 1000);
    },

    timeStop: function () {
        clearInterval(counter)
    },
    countDown: function () {
        quiz.time--;
        timerEl.textContent = quiz.time + "seconds left";
        if (quiz.time < 1) {
            questionDiv.innerHTML = "Out of time!"
            quiz.time = 15;
            quiz.questionindex++
            quiz.nextQuestion();

        }
    },
    getAnswer: function (e) {
        if (e.target.matches("li")) {
            e.target.getattribute("data");

            if (e.target.getattribute("data") == quiz.questions[quiz.questionindex].c) {
                questionEl.appendChild(correctAlert);
                quiz.time = 15;
                quiz.questionindex++;
                quiz.correct++;
                quiz.nextQuestion();
            }
            else {
                questionEl.appendChild(inCorrectAlert);
                quiz.time = 15
                quiz.questionindex++
                quiz.nextQuestion()
            }
        }
    }
}
console.log(quiz.startQuiz)
startButton.addEventListener("click", quiz.startQuiz);
answerLi.addEventListener("click", quiz.getAnswer);
