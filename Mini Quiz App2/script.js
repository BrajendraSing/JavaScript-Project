var score = document.querySelector("#score");
var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var btn = document.querySelector("#btn");

let a, b, ans, scr = 0;

function getNumber() {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    ans = a * b;
    if (a == 0 || b == 0) {
        getNumber();
    }
}

function loadQuestion() {
    getNumber();
    answer.value = "";
    answer.focus();
    question.innerHTML = `What is ${a} multiply by ${b}?`;
}
loadQuestion();

function loadScore() {
    score.innerHTML = `Score : ${scr}`;
}

function getResult() {
    var value = parseInt(answer.value);
    if (isNaN(value)) {
        alert("Please a the number");
    } else {
        if (value == ans) {
            scr++;
            loadScore();
        } else {
            scr--;
            loadScore();
        }
        loadQuestion();
    }
}

btn.addEventListener('click', () => {
    getResult();
});

document.addEventListener('keyup', (res) => {
    if (res.key == "Enter") {
        getResult();
    }
});



