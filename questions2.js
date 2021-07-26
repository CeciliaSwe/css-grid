let answerA = document.getElementById("btn-optionA");
let answerB = document.getElementById("btn-optionB");
let answerC = document.getElementById("btn-optionC");
let pickedOption = document.getElementsByClassName("option-prefix");



answerA.addEventListener('click', checkAnswer);
answerB.addEventListener('click', checkAnswer);
answerC.addEventListener('click', checkAnswer);

function checkAnswer(event) {
  alert("Let's check your answer!");
  console.log('"this" currently refers to', this.id);
  console.log('"this" currently refers to', this);

  if (pickedOption === quizCatA[0].answer) {
    alert("WOOP you did it");
  } else {
    alert("NAH that's not it");
  }
};

`You picked ${questionNumber}${letter}. Let's check if it is correct!`



/*var questionCounter = 0;

const quizContainer = document.getElementById("q-out");
    const resultsContainer = document.getElementById("r-out");
    const submitButton = document.getElementById('submit');
    const optionContainer = document.getElementById("o-out")*/

var quiz = [{
  "question": "What is the full form of IP?",
  "choices": ["Internet Provider", "Internet Port", "Internet Protocol"],
  "correct": "Internet Protocol"
}, {
  "question": "Who is the founder of Microsoft?",
  "choices": ["Bill Gates", "Steve Jobs", "Steve Wozniak"],
  "correct": "Bill Gates"
}, {
  "question": "1 byte = ?",
  "choices": ["8 bits", "64 bits", "1024 bits"],
  "correct": "8 bits"
}, {
  "question": "The C programming language was developed by?",
  "choices": ["Brendan Eich", "Dennis Ritchie", "Guido van Rossum"],
  "correct": "Dennis Ritchie"
}, {
  "question": "What does CC mean in emails?",
  "choices": ["Carbon Copy", "Creative Commons", "other"],
  "correct": "Carbon Copy"
}, {
  "question": "wsxwsxwsxwsxwsxwsx?",
  "choices": ["wsx", "edc", "qaz"],
  "correct": "wsx"
}, {
  "question": "qazqazqazqazqazqaz?",
  "choices": ["qaz", "wsx", "edc"],
  "correct": "qaz"
}, {
  "question": "asdasdasdasdasdasd?",
  "choices": ["asd", "qwe", "zxc"],
  "correct": "asd"
}, {
  "question": "zxczxczxczxczxczxc?",
  "choices": ["zxc", "asd", "qwe"],
  "correct": "zxc"
}, {
  "question": "qweqweqweqweqweqwe?",
  "choices": ["qwe", "asd", "zxc"],
  "correct": "qwe"
}];

/*var currentQuestion = Math.floor(Math.random() * quiz.length);


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");
score = 0,
  askingQuestion = true;
function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}
function askQuestion() {
//increment the counter
    questionCounter++;
var choices = quiz[currentQuestion].choices,
    choicesHtml = "";
// loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }
// load the question
  quizContainer.innerHTML = "Q" + (questionCounter) + ". " +
    quiz[currentQuestion].question;
// load the choices
  optionContainer.innerHTML = choicesHtml;
// setup for the first time
  if (questionCounter === 1) {
    scoreContainer.textContent = "Score: 0 right answers out of " +
      quiz.length + " possible.";
    submitBtn.textContent = "Submit Answer";
}
}
function checkAnswer() {
// are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Next Question";
    askingQuestion = false;
// determine which radio button they clicked
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // if this radio button is checked
        userpick = radios[i].value;
      }
// get index of correct answer
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }
// setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }
scoreContainer.textContent = "Score: " + score + " right answers out of " +
      quiz.length + " possible.";
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Submit Answer";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}
function showFinalResults() {
  content.innerHTML = "<h2>You've complited the quiz!</h2>" +
    "<h2>Below are your results:</h2>" +
    "<h2>" + score + " out of " + quiz.length + " questions, " +
    Math.round(score / quiz.length * 100) + "%<h2>";
}
window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);*/

/*

// Kick things off

function buildQuiz(){
  // variable to store the HTML output
  const outputQ = [];
  const outputA = [];

  // for each question...
  quiz.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      outputQ.push(
        `<div class="question"> ${currentQuestion.question} </div>`
      );
      outputA.push(
        `<div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // displau Q and A in separate containers
  quizContainer.innerHTML = outputQ;
  optionContainer.innerHTML = outputA;
}




buildQuiz();
function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("q-out");
const resultsContainer = document.getElementById("r-out");
const submitButton = document.getElementById('submit');
const optionContainer = document.getElementById("o-out")




// Event listeners
submitButton.addEventListener('click', showResults);




/*
var questionCounter = 0;

let quizContainer = document.getElementById("q-out");
let resultsContainer = document.getElementById("r-out");
let submitButton = document.getElementById('submit');
let optionContainer = document.getElementById("o-out")


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");
score = 0,
  askingQuestion = true;
function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}
function askQuestion() {
//increment the counter
    questionCounter++;
var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

// loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }
// load the question
  quizContainer.innerHTML = "Q" + (questionCounter) + ". " +
    quiz[currentQuestion].question;
// load the choices
  optionContainer.innerHTML = choicesHtml;
// setup for the first time
  if (questionCounter === 1) {
    scoreContainer.textContent = "Score: 0 right answers out of " +
      quiz.length + " possible.";
    submitBtn.textContent = "Submit Answer";
}
}

*/

  /*
function getNewQuestions() {
    const questionsIndex = availableQuestions[0]++;
    currentQuestion = availableQuestions[questionsIndex];
    quizContainer.innerText = currentQuestion.question;
}
*/