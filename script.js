//DOM ELEMENTS

const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions
const quizQuestions = [
    {
        question: "What is Manchester United's nickname?",
        answers: [
            { text: "The Citizens", correct: false },
            { text: "The Red Ones", correct: false },
            { text: "The Red Devils", correct: true },
            { text: "The Gunners", correct: false },
        ],
    },
    {
        question: "Which stadium is Manchester United's home ground?",
        answers: [
            { text: "Anfield", correct: false },
            { text: "Old Trafford", correct: true },
            { text: "Stamford Bridge", correct: false },
            { text: "Emirates Stadium", correct: false },
        ],
    },
    {
        question: "Who is Manchester United's all-time leading goalscorer?",
        answers: [
            { text: "André Onana", correct: false },
            { text: "Ryan Giggs", correct: false },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Wayne Rooney", correct: true },
        ],
    },
    {
        question: "Which manager won the most trophies with Manchester United?",
        answers: [
            { text: "Ole Gunnar Solskjær", correct: false },
            { text: "José Mourinho", correct: false },
            { text: "Sir Alex Ferguson", correct: true },
            { text: "Matt Busby", correct: false },
        ],
    },
    {
        question: "In what year was Manchester United founded (originally as Newton Heath)?",
        answers: [
            { text: "1892", correct: false },
            { text: "1918", correct: false },
            { text: "1878", correct: true },
            { text: "2010", correct: false },
        ],
    },
];

//QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listing

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    //reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion() {
    //reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)
        answersContainer.appendChild(button);
    });

}

function selectAnswer(event) {
    if (answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionIndex++;

        //checks for more questions or if quiz is over
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }


    }, 1000)
}

function showResults() {
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100


    if (percentage === 100) {
        resultMessage.textContent = "United Legend!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "True Red!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Decent Supporter!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "You have some work to do!";
    } else {
        resultMessage.textContent = "Time to visit Old Trafford and study up!";
    }

}

function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}

