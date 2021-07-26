function displayQuestionByCategory() {
  if (randomCategory === 0) {
      alert("Picked Pokemon");

      const quizCatA = quiz.filter(quiz => quiz.category === "Pokemon");
      const quizCatB = quiz.filter(quiz => quiz.category === "Maths");
      const quizCatC = quiz.filter(quiz => quiz.category === "Minecraft");
      console.log(quizCatA);

      console.log(quiz[0]);
      quizContainer.innerText = quiz[0].question;
      optionText1.innerText = quiz[0].choice1;
      optionText2.innerText = quiz[0].choice2;
      optionText3.innerText = quiz[0].choice3;
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