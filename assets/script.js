var button = document.querySelector('.btn');
var start = document.querySelector('#intro');
var quiz = document.querySelector('#quiz');
//var end = document.querySelector('#end');
//var submit = document.querySelector('#submit);

//var questions = ["First", "Second", "Third", "Fourth", "Fifth"];

const begin = function (){
    start.style.display= "none";
    quiz.style.display= "block";
    //questions.style.display="block";
}
button.addEventListener("click", begin)


