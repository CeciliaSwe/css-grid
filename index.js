const quizContainer = document.getElementById("q-out");
const resultsContainer = document.getElementById("r-out");
const optionText1 = document.getElementById("option-1");
const optionText2 = document.getElementById("option-2");
const optionText3 = document.getElementById("option-3");
let correctAnswer = "";
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =  [];

function clickQuestion (event) {
  let selectDiv = document.getElementsByClassName('category');
  let classLength = selectDiv.length;
    /*alert("There are "+classLength+" category classes in the html code");*/
  let randomCategory = Math.floor(Math.random() * selectDiv.length);
  console.log(randomCategory, selectDiv[randomCategory]);
  console.log(randomCategory);
    
    /*console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');*/
    
    questionValue();
    lightCategory(randomCategory);   
    shuffle(quizCatA);
    shuffle(quizCatB);
    shuffle(quizCatC);
    displayQ(randomCategory);
    
}
  
let questionButton = document.getElementById('question');
questionButton.addEventListener('click', clickQuestion); // left clicks



function questionValue() {
    let values = [10, 20, 50, 100];
    let randomValue = Math.floor(Math.random() * values.length);
    console.log(values[randomValue]);
    /*alert(`The value of the question is ${values[randomValue]}.`);*/
    document.getElementById("value").innerHTML = values[randomValue];
}

function lightCategory(randomCategory) {
    if (randomCategory === 0) {
        /*alert("Picked 1")*/
        document.getElementById("c-1").style.backgroundColor = "orange";
    } else if (randomCategory === 1) {
        /*alert("Picked 2");*/
        document.getElementById("c-2").style.backgroundColor = "orange";
    } else if (randomCategory === 2) {
        /*alert("Picked 3");*/
        document.getElementById("c-3").style.backgroundColor = "orange";
    } else if (randomCategory === 3) {
        /*alert("Picked 4");*/
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
      question: "How many starter Pokemons can you choose from?",
      choice1: "1",
      choice2: "3",
      choice3: "5",
      answer: 2,
      category: "Pokemon",
  },
  {
    question: "What color is Charmander?",
    choice1: "Green",
    choice2: "Blue",
    choice3: "Orange",
    answer: 3,
    category: "Pokemon",
  },
  {
    question: "Which is not a legendary Pokemon?",
    choice1: "Heatran",
    choice2: "Dragonite",
    choice3: "Lugia",
    answer: 2,
    category: "Pokemon",
  },
  {
    question: "Which is a Minecraft character?",
    choice1: "Creeper",
    choice2: "Crawler",
    choice3: "Crowbar",
    answer: 1,
    category: "Minecraft",
  },
  {
    question: "Who created Minecraft?",
    choice1: "Anders Jansson",
    choice2: "Johan Larsson",
    choice3: "Markus Persson",
    answer: 3,
    category: "Minecraft",
  },
  {
    question: "What shape are building blocks?",
    choice1: "square",
    choice2: "circular",
    choice3: "hexagon",
    answer: 1,
    category: "Minecraft",
  },
  {
      question: "What is 3x3",
      choice1: "9",
      choice2: "18",
      choice3: "35",
      answer: 1,
      category: "Maths",
  },
  {
    question: "What is 24 - 8",
    choice1: "16",
    choice2: "13",
    choice3: "19",
    answer: 1,
    category: "Maths",
  },
  {
      question: "What is 4-4",
      choice1: "2",
      choice2: "16",
      choice3: "0",
      answer: 3,
      category: "Maths",
  }
];

//Filter out questions from a specific category
var quizCatA = quiz.filter(quiz => quiz.category === "Pokemon");
var quizCatB = quiz.filter(quiz => quiz.category === "Minecraft");
var quizCatC = quiz.filter(quiz => quiz.category === "Maths");
var posA = 0;
var posB = 0;
var posC = 0;

function displayFirstQ(randomCategory) {
  if (randomCategory === 0) {
      /*alert("Picked Pokemon");*/
      console.log(quizCatA[0]);
      quizContainer.innerText = quizCatA[0].question;
      optionText1.innerText = quizCatA[0].choice1;
      optionText2.innerText = quizCatA[0].choice2;
      optionText3.innerText = quizCatA[0].choice3;
      correctAnswer = (quizCatA[0].answer);
  } else if (randomCategory === 1) {
      /*alert("Picked Minecraft");*/
      console.log(quizCatB[0]);
      quizContainer.innerText = quizCatB[0].question;
      optionText1.innerText = quizCatB[0].choice1;
      optionText2.innerText = quizCatB[0].choice2;
      optionText3.innerText = quizCatB[0].choice3;
      correctAnswer = (quizCatB[0].answer);
  } else if (randomCategory === 2) {
      /*alert("Picked Maths");*/
      console.log(quizCatC[0]);
      quizContainer.innerText = quizCatC[0].question;
      optionText1.innerText = quizCatC[0].choice1;
      optionText2.innerText = quizCatC[0].choice2;
      optionText3.innerText = quizCatC[0].choice3;
      correctAnswer = (quizCatC[0].answer);
  } else {
      /*alert("Not defined yet");*/
  }
};  

// compares chosen answer with correct answer and returns alert
function checkAnswer(event) {
  //get the value of the checked radiobutton to compare to correct answer and increment results
  let currentAnswer = document.querySelector('input[name="test"]:checked').value;
  let currentScore = parseInt(resultsContainer.innerHTML);
  let addedScore = parseInt(document.getElementById("value").innerHTML);
  let incorrect = parseInt(document.getElementById("incorrect").innerHTML);

  if (parseInt(currentAnswer) === parseInt(correctAnswer)) {
    alert("WOOP you did it");
    resultsContainer.innerText = currentScore + addedScore;
    
  
    } else{
      alert("NAH")
      document.getElementById("incorrect").innerHTML++;
      
    }

    clear();
    incrementStrike();

 }

 function incrementStrike() {
 let incorrect = parseInt(document.getElementById("incorrect").innerHTML);
  if (incorrect === 1) {
    alert("1 wrong")
    document.getElementById("strike-1").style.backgroundColor = "red";
    
} else if (incorrect === 2) {
  alert("2 wrong");
  document.getElementById("strike-2").style.backgroundColor = "red";
   
} else if (incorrect === 3) {
  alert("3 wrong");
  document.getElementById("strike-3").style.backgroundColor = "red";
    
} else {
  alert("No incorrect!")
  
}
};  

 

 /*function loadNext() {

  quizContainer.innerText = quizCatA[pos].question;
  optionText1.innerText = quizCatA[pos].choice1;
  optionText2.innerText = quizCatA[pos].choice2;
  optionText3.innerText = quizCatA[pos].choice3;
  correctAnswer = (quizCatA[pos].answer);

  console.log(quizCatA[pos]);
 }*/
 function clear() {
   // Clears lit category

   document.getElementById("c-1").style.backgroundColor = "grey";
   document.getElementById("c-2").style.backgroundColor = "grey";
   document.getElementById("c-3").style.backgroundColor = "grey";
   document.getElementById("c-4").style.backgroundColor = "grey";

   // Clears the radiobuttons
   Array.from( document.querySelectorAll('input[name="test"]:checked'), input => input.checked = false );

 }

 function displayQ(randomCategory) {
  if (randomCategory === 0) {
      /*alert("Picked Pokemon");*/
      console.log(quizCatA[posA]);
      quizContainer.innerText = quizCatA[posA].question;
      optionText1.innerText = quizCatA[posA].choice1;
      optionText2.innerText = quizCatA[posA].choice2;
      optionText3.innerText = quizCatA[posA].choice3;
      correctAnswer = (quizCatA[posA].answer);
      posA++;
  } else if (randomCategory === 1) {
      /*alert("Picked Minecraft");*/
      console.log(quizCatB[posB]);
      quizContainer.innerText = quizCatB[posB].question;
      optionText1.innerText = quizCatB[posB].choice1;
      optionText2.innerText = quizCatB[posB].choice2;
      optionText3.innerText = quizCatB[posB].choice3;
      correctAnswer = (quizCatB[posB].answer);
      posB++;
  } else if (randomCategory === 2) {
      /*alert("Picked Maths");*/
      console.log(quizCatC[posC]);
      quizContainer.innerText = quizCatC[posC].question;
      optionText1.innerText = quizCatC[posC].choice1;
      optionText2.innerText = quizCatC[posC].choice2;
      optionText3.innerText = quizCatC[posC].choice3;
      correctAnswer = (quizCatC[posC].answer);
      posC++;
  } else {
      /*alert("Not defined yet");*/
  }
};  

 let submitAnswer = document.getElementById("submit-answer");
 submitAnswer.addEventListener('click', checkAnswer); // left clicks*/

//all OK until here!
