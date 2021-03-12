function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if(q1=="femur") {c++}
    if(q2=="Reflex action") {c++}
    if(q3=="Corpus Callosum") {c++}
    if(q4=="Biconvex") {c++}
    if(q5=="29") {c++}
    if(q6=="Left ventricle") {c++}
    if(q7=="Oxyhemoglobin") {c++}

    quiz.style.display="none";

    if(c<=4){
    result.textContent='Your result is '+c+' Work hard!!'
    } else {
        result.textContent='Your result is '+c+'  Nice! Keep it up'
    }
}