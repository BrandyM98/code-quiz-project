var button = document.querySelector('.btn');
var start = document.querySelector('#start');
var quiz = document.querySelector('#quiz');

const begin = function (){
    start.style.display= "none";
    quiz.style.display= "block";

}

button.addEventListener("click", begin)