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
let score = 0
let answersDisabled = false

