const quizContainer = document.getElementById("q-out");
const resultsContainer = document.getElementById("r-out");
const submitButton = document.getElementById('submit');
const optionText1 = document.getElementById("option-1");
const optionText2 = document.getElementById("option-2");
const optionText3 = document.getElementById("option-3");

function clickQuestion (event) {
    
    let selectDiv = document.getElementsByClassName('category');
    let classLength = selectDiv.length;
    alert("There are "+classLength+" category classes in the html code");
    let randomCategory = Math.floor(Math.random() * selectDiv.length);
    console.log(randomCategory, selectDiv[randomCategory]);
    console.log(randomCategory);
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');

    questionValue();
    lightCategory(randomCategory);   
    shuffle(quiz);
    console.log(quiz[0]);
    quizContainer.innerText = quiz[0].question;
    optionText1.innerText = quiz[0].choice1;
    optionText2.innerText = quiz[0].choice2;
    optionText3.innerText = quiz[0].choice3;
}
  
  let questionButton = document.getElementById('question');
  questionButton.addEventListener('click', clickQuestion); // left clicks

function questionValue() {
    let values = [10, 20, 50, 100];
    let randomValue = Math.floor(Math.random() * values.length);
    console.log(values[randomValue]);
    alert(`The value of the question is ${values[randomValue]}.`);
    document.getElementById("value").innerHTML = values[randomValue];
}

function lightCategory(randomCategory) {
    if (randomCategory === 0) {
        alert("Picked 1");
        document.getElementById("c-1").style.backgroundColor = "orange";
    } else if (randomCategory === 1) {
        alert("Picked 2");
        document.getElementById("c-2").style.backgroundColor = "orange";
    } else if (randomCategory === 2) {
        alert("Picked 3");
        document.getElementById("c-3").style.backgroundColor = "orange";
    } else if (randomCategory === 3) {
        alert("Picked 4");
        document.getElementById("c-4").style.backgroundColor = "orange";
    };
    
}


//Shuffles array according to Fisher-Yates https://bost.ocks.org/mike/shuffle/

function shuffle(quiz) {
  var currentIndex = quiz.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [quiz[currentIndex], quiz[randomIndex]] = [
      quiz[randomIndex], quiz[currentIndex]];
  }

  return quiz;
}

// Questions

let quiz = [
  {
      question: "What is 2+2",
      choice1: "2",
      choice2: "4",
      choice3: "8",
      answer: 2,
  },
  {
      question: "What is 3x3",
      choice1: "9",
      choice2: "18",
      choice3: "35",
      answer: 1,
  },
  {
      question: "What is 4-4",
      choice1: "2",
      choice2: "16",
      choice3: "0",
      answer: 3,
  }
];

//Perform shuffle and log first q



//all OK until here!


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =  [];



function displayQ() {
    quizContainer.innerText = (quiz[0].question);
}

function getNewQuestions() {
    const questionsIndex = availableQuestions[0]++;
    currentQuestion = availableQuestions[questionsIndex];
    quizContainer.innerText = currentQuestion.question;
}

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
