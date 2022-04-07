const quizdata=[
    {
        question:" Most popular coding langugae ?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"C++",
        correct:"a"
    },{
        question:"Best mobile Game ?",
        a:"PUBG",
        b:"COC",
        c:"Ludo",
        d:"Pokemon Go",
        correct:"PUBG"
    },{
        question:"Best Place to visit in india ?",
        a:"Mumbai",
        b:"Delhi",
        c:"Goa",
        d:"jammu",
        correct:"c"
    },{
        question:"Right age for voting ?",
        a:"18+",
        b:"12",
        c:"10",
        d:"15",
        correct:"a"
    },{
        question:"Most popular food of thane ?",
        a:"Wadapav",
        b:"Pavbhaji",
        c:"Misalpav",
        d:"Chines bhel",
        correct:"a"
    }
]
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionel=document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn=document.getElementById("submit");


let currentquiz=0;
let score=0;

loadquiz();

function loadquiz(){
    deSelectAnswer();
    const currentquizdata=quizdata[currentquiz];
    questionel.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;

}

function getselected(){
    let answer=undefined;
    answerEls.forEach((answerEl)=> {
        if(answerEl.checked){
            console.log("hii")
            answer=answerEl.id;
        }

    });
    return answer;
}

function deSelectAnswer(){
    answerEls.forEach((answerels)=>{
        answerels.checked=false;

    })
}

submitbtn.addEventListener("click",()=>{
    const answer=getselected();
    console.log(answer)
    if(answer){
        if(answer==quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;
        if(currentquiz<quizdata.length){
            loadquiz();
        }
        else{
            quiz.innerHTML=`<h2> You answerd correctly at ${score}/${quizdata.length} question </h2>
            <button onclick="location.reload()">Reload</button>`

        }
    }
    
    
});