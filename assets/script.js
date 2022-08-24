//html variables
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var timerEl2 = document.querySelector("header").children[1];
var submitScoreBtn = document.querySelector("#submitBtn");
var viewScoreBtn = document.querySelector("#scoresbtn");
var clearScoreBtn = document.querySelector("#clearScores");
var answerBtn = document.querySelector("ul");
var returnHome = document.querySelector("#backBtn");
var titleEl = document.querySelector("#title");

//this is where I will put my questions and answers
var questionEl = {
    questions: [ //I will write my questions here
        "Commonly used data types do NOT include:",
        "Arrays in JavaScript can be used to store",
        "String values must be enclosed within _______ when being assigned to variables.",
        "The condition in an if / else statment is enclosed with _____.",
    ],
    answers: [//the answers will go here
        ["stings", "booleans", "correct:'alerts'", "numbers"],
        ["numbers and strings", "other arrays", "booleans", "correct: 'all of the above'"],
        ["commas", "correct:'curly brackets'", "quotes", "parenthesis"],
        ["quotes", "curely brackets", "correct:'parenthesis'", "square brackets"],
    ]
}

var gameTimer = 60; //this is the time for the game

//this is where the time and score stuff will be written
var cursor = 0
var remTime = gameTimer; //the time left
var score = 0;
var gameDone = true;

//intro to quiz will go here
function setupQuiz() {
    remTime = gameTimer;
    timerEl.textContent = gameTimer; //will set the time back?

    document.querySelector("highscoreHolder").style.display = "none"; //will not show

    titleEl.textContent = "Coding Quiz Challenge";

    titleEl.style.display = "block"; // will show
    document.querySelector("intro").style.display = "block";
    viewScoreBtn.style.display = "block";
    startBtn.style.display = "block";

    return;

}

//when start button is hit this is what will go here

function beginGame() {
    gameDone = false;
    cursor = 0;

    viewScoreBtn.style.display = "none";
    startBtn.style.display = "none";
    document.querySelector("intro").style.display = "none";
    timerEl2.style.display = "block";

    openQuestions(cursor);
    setTimer();

    return;


}

//when time ends this is what will go here

function startTimer() {
    var timeInterval = setInterval(function () {
        if (gameDone === true) {
            endInterval(timeInterval);
            return;
        }
        if (remTime < 1) {
            endInterval(timeInterval);
            gameOver();
        }
        timerEl.textContent = remTime;
        remTime--;
    }, 1000); //this would be 1 second
}

function openQuestions(questionIndex); {
    titleEl.textContent = questionEl.questions[questionIndex];
    createAnswers(questionIndex);

    return;
}

function createAnswers(questionIndex) {
    answerBtn.innerHTML = "";

    for (let answerIndex = 0; answerIndex < questionEl.answers[questionIndex].length; answerIndex++) {
        var currentAnswer = document.createElement('li');
        var tempString = questionEl.answers[questionIndex][answerIndex];

        if (questionIndex.answers[questionIndex][answerIndex].includes("correct:")) {
            tempString = questionEl.answers[questionIndex][answerIndex].substring(8, questionEl.answers[questionIndex][answerIndex].length);
            currentAnswer.id = "correct";
        }
        currentAnswer.textContent = tempString;
        answerBtn.appendChild(currentAnswer);
    }
    return;
}

function nextQuestion() {
    gameDone = true;
    score = remTime;

    timerEl2.style.display = "none";
    titleEl.style.display = "none";
    answerBtn.innerHTML = "";

    document.querySelector('#scoreSpan').textContent = score;
    document.querySelector("#submit-score").style.display = "block";

    return;

}

//everything under here is what will make the quiz function
