const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question:"What does DOM stand for?",
        options:[
        "Document Object Model",
        "Data Object Management",
        "Document Order Method",
        "Desktop Object Mode"
        ],
        answer:"Document Object Model"
    },
    {
        question:"Which of the following is NOT a JavaScript data type?",
        options:["String", "Boolean", "Undefined", "Integer"],
        answer:"Integer"
    },
    {
        question:"What is the output of 'typeof null' in JavaScript?",
        options:["object", "null", "undefined", "boolean"],
        answer:"object"
    },
    {
        question:"what is the name of IOTBTECH Web Dev Lead Mentor 2026 cohort?",
        options:["Awwal", "Idris", "Waliyah", "AbdulRahmon"],
        answer:"Awwal"
    },
    {
        question:"Which of the following is NOT a JavaScript framework?",
        options:["React", "Angular", "Vue", "Django"],
        answer:"Django"
    },
    {
        question:"Which company developed JavaScript?",
        options:["Google","Netscape","Microsoft","Apple"],
        answer:"Netscape"
    },
    {
        question:"Which symbol means strict equality?",
        options:["=","==","===","!="],
        answer:"==="
    },
    {
        question:"Which of the following is NOT a JavaScript loop?",
        options:["for","while","do-while","foreach"],
        answer:"foreach"
    },
    {
        question:"Which method converts JSON to object?",
        options:[
        "JSON.parse",
        "JSON.stringify",
        "JSON.convert",
        "JSON.object"
        ],
        answer:"JSON.parse"
    }
]
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;
const userAnswers = [];
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

function loadQuestion(){
    clearInterval(timer);
    timeLeft = 15;
    startTimer();
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsEl.appendChild(button);
    });
    updateProgress();
}

function selectAnswer(option){
    const q = questions[currentQuestion];
    const correct = option === q.answer;
    if(correct){
        score++;
    }
    userAnswers.push({
        question:q.question,
        selected:option,
        correct:q.answer
    });
    scoreEl.textContent = score;
    nextQuestion();
}

function nextQuestion(){
    currentQuestion++;
    if(
        currentQuestion <
        questions.length
    ){
        loadQuestion();
    }else{
        showResults();
    }
}

function updateProgress(){
    const progress = ((currentQuestion + 1)/ questions.length) * 100;
    progressBar.style.width = progress + "%";
}

function startTimer(){
    timerEl.textContent = timeLeft;
    timer = setInterval(()=>{
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0){
            clearInterval(timer);
            userAnswers.push({
                question:
                questions[currentQuestion]
                .question,

                selected:
                "No Answer",

                correct:
                questions[currentQuestion]
                .answer
            });
            nextQuestion();
        }
    },1000);
}

function showResults(){

    document.getElementById("quiz-container").style.display = "none";

    document.getElementById("result-container").style.display = "block";

    document.getElementById("final-score").textContent =`${score}/${questions.length}`;
    saveBestScore();
    showReview();
}

function saveBestScore(){

    const best = localStorage.getItem("bestScore") || 0;
    if(score > best){
        localStorage.setItem("bestScore",score);
    }
    document.getElementById("best-score").textContent = localStorage.getItem("bestScore");
}

function showReview(){
    const review = document.getElementById("review");
    userAnswers.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<p> Question:${item.question}</p>
            <p>Your Answer: ${item.selected} </p>
            <p>Correct Answer:${item.correct} </p>
            <hr>`;
        review.appendChild(div);
    });
}

// function stopQuiz() {
//     clearInterval(timer); // Stop the countdown timer

//     document.getElementById("quiz-container").style.display = "none";
//     document.getElementById("result-container").style.display = "none";

//     // Optional: display score and review
// }
loadQuestion();