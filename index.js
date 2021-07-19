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
        displayCat1();
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

//all OK until here!



// shuffles the quiz and avoids repeat according to ...
function shuffle(quiz) {
    var m = quiz.length, t, i;
  // While there remain elements to shuffle…
    while (m) {
  // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  // And swap it with the current element.
      t = quiz[m];
      quiz[m] = quiz[i];
      quiz[i] = t;
    }
  return quiz;
  }
  

var questionCounter = 0;

const quizContainer = document.getElementById("q-out");
const resultsContainer = document.getElementById("r-out");
const submitButton = document.getElementById('submit');
const optionContainer = document.getElementById("o-out")


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


