let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =  [];

let questions = [
    {
        question: ""What is 2+2",
        choice1: "2",
        choice2: "4",
        choice3: "8",
        answer: 2,
    },
    {
        question: ""What is 3x3",
        choice1: "9",
        choice2: "18",
        choice3: "35",
        answer: 1,
    },
    {
        question: ""What is 4-4",
        choice1: "2",
        choice2: "16",
        choice3: "0",
        answer: 3,
    }
];

function startGame() {
    availableQuestions = [...questions];
    getNewQuestions();
}

function getNewQuestions() {
    const questionsIndex = availableQuestions[0]++;
    currentQuestion = availableQuestions[questionsIndex];
    quizContainer.innerText = currentQuestion.question;
}

const quizContainer = document.getElementById("q-out");
const resultsContainer = document.getElementById("r-out");
const submitButton = document.getElementById('submit');
const optionContainer = document.getElementById("o-out");