var question = document.querySelector(".quiz-question");
var option1_text = document.querySelector("#option1-text");
var option2_text = document.querySelector("#option2-text");
var option3_text = document.querySelector("#option3-text");
var option4_text = document.querySelector("#option4-text");

var answer = document.querySelector("#answer");
answer.style.display = 'none';

function markUnChecked(){
document.querySelector("#option1").checked = false;
document.querySelector("#option2").checked = false;
document.querySelector("#option3").checked = false;
document.querySelector("#option4").checked = false;
}


var quiz_result = document.querySelector(".quiz-result");

var quiz_submit = document.querySelector("#quiz-submit");
var quiz_next = document.querySelector("#quiz-next");

quiz_result.style.display = 'none';

var itr = 0;
var questions;

function loadQuestion(){
    try{
        fetch("questions/computer-basic.txt").then((response) => {return response.text()}).then((result)=>{
            var que,op1,op2,op3,op4,res;
            questions = JSON.parse(result);
            // console.log(questions);
            que = questions[itr].question;
            op1 = questions[itr].option1;
            op2 = questions[itr].option2;
            op3 = questions[itr].option3;
            op4 = questions[itr].option4;
            res = questions[itr].correct;
    
            question.innerText = que;
            option1_text.innerText = op1;
            option2_text.innerText = op2;
            option3_text.innerText = op3;
            option4_text.innerText = op4;
            answer.innerText = res;
            
            
        }).catch(()=>{itr=0;loadQuestion();});
    
    }catch(error){
        document.write("Error Occured");
    }
}

loadQuestion();

quiz_submit.addEventListener('click',function(){
    var option1 = document.querySelector("#option1");
    var option2 = document.querySelector("#option2");
    var option3 = document.querySelector("#option3");
    var option4 = document.querySelector("#option4");
    var answer2 = document.querySelector("#answer").innerHTML;
    var quiz_result2 = document.querySelector(".quiz-result").innerHTML;
    
    if(option1.checked){
        var option1_text2 = document.querySelector("#option1-text").innerHTML;
        if(option1_text2 == answer2){
            quiz_result.innerText = "You Choose Correct option";
            quiz_result.style.display = 'block';

        }else{
            quiz_result.innerHTML = `You Missed!!<br>Answer : ${answer2}`
            quiz_result.style.display = 'block';
        }
    }

    if(option2.checked){
        var option2_text2 = document.querySelector("#option2-text").innerHTML;
        if(option2_text2 == answer2){
            quiz_result.innerText = "You Choose Correct option";
            quiz_result.style.display = 'block';

        }else{
            quiz_result.innerHTML = `You Missed!!<br>Answer : ${answer2}`
            quiz_result.style.display = 'block';
        }
    }

    if(option3.checked){
        var option3_text2 = document.querySelector("#option3-text").innerHTML;
        if(option3_text2 == answer2){
            quiz_result.innerText = "You Choose Correct option";
            quiz_result.style.display = 'block';

        }else{
            quiz_result.innerHTML = `You Missed!!<br>Answer : ${answer2}`
            quiz_result.style.display = 'block';
        }
    }

    if(option4.checked){
        var option4_text2 = document.querySelector("#option4-text").innerHTML;
        if(option4_text2 == answer2){
            quiz_result.innerText = "You Choose Correct option";
            quiz_result.style.display = 'block';

        }else{
            quiz_result.innerHTML = `You Missed!!<br>Answer : ${answer2}`;
            quiz_result.style.display = 'block';
        }
    }

});


quiz_next.addEventListener('click',function(){
    itr++;
    loadQuestion();
    markUnChecked();
    var quiz_result2 = document.querySelector(".quiz-result").innerHTML;
    quiz_result.innerText = "";
    quiz_result.style.display = 'none';
});
