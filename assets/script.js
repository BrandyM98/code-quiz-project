var state ='start'

var startEl = document.querySelector('#start');//line 15 in html
var quizEl = document.querySelector('#quiz');//line 19 in html
var endEl = document.querySelector('#end');//line 25 in html
var startButton = document.querySelector('#start button');//line 17 in html
var submitScore = document.querySelector('#end button');//line 25 in html
var titleEl = document.querySelector("#quiz #title");//line 20 in html
var questionsEl = document.querySelector('#questions')//line 21 in html

var questions = ["First", "Second", "Third", "Fourth", "Fifth"];
var cursor = 0; 

function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
        displayQuestions();
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

button.addEventListener("click", begin)

//const nextQuestion = function () {

//function pickAnswer() {}

/*
const quizData = [
    {
        "question: hi?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
    }
    {
        "question: hi?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
    }
    {
        "question: hi?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
    }
    {
        "question: hi?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('answer')
const questionEl = document.querySelectorAll('question')
const a-question = document.querySelectorAll('a-question')
const b-question = document.querySelectorAll('b-question')
const c-question = document.querySelectorAll('c-question')
const d-question = document.querySelectorAll('d-question')
const submit = document.getElementById('submit')

var current = 0
var score = 0

begin()

*/