let quizContainer = document.getElementById("q-out");
let resultsContainer = document.getElementById("r-out");
let optionText1 = document.getElementById("option-1");
let optionText2 = document.getElementById("option-2");
let optionText3 = document.getElementById("option-3");
let correctAnswer = "";

//Wait for DOM to load, the shuffle quiz
document.addEventListener("DOMContentLoaded", function() {
  shuffle(quizCatA);
  shuffle(quizCatB);
  shuffle(quizCatC);
});

// Uses event listner to initialize the quiz with assigning a random value, category and question
function clickQuestion (event) {
  let selectDiv = document.getElementsByClassName('category');
  let classLength = selectDiv.length;
    
  /*alert("There are "+classLength+" category classes in the html code");*/
  let randomCategory = Math.floor(Math.random() * selectDiv.length);
  
  /*console.log(randomCategory, selectDiv[randomCategory]);
  console.log(randomCategory);
  console.log('Received the ' + event.type + " event!");
  console.log('"this" currently refers to', this.id);
  console.log('You clicked the button!\n');*/
    
    questionValue();
    lightCategory(randomCategory);   
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





//Filter out questions from a specific category
var quizCatA = quiz.filter(quiz => quiz.category === "Pokemon");
var quizCatB = quiz.filter(quiz => quiz.category === "Minecraft");
var quizCatC = quiz.filter(quiz => quiz.category === "Maths");
var posA = 0;
var posB = 0;
var posC = 0;



// compares chosen answer with correct answer and increments score or strikes
function checkAnswer(event) {
  //get the value of the checked radiobutton to compare to correct answer and increment results
  let currentAnswer = document.querySelector('input[name="test"]:checked').value;
  let currentScore = parseInt(resultsContainer.innerHTML);
  let addedScore = parseInt(document.getElementById("value").innerHTML);
  let incorrect = parseInt(document.getElementById("incorrect").innerHTML);

  //
  if (parseInt(currentAnswer) === parseInt(correctAnswer)) {
    alert("WOOP you did it");
    resultsContainer.innerText = currentScore + addedScore;
    } else{
      alert("NAH")
      document.getElementById("incorrect").innerHTML++; 
    }

    clear();
    incrementStrike();
    show();
    hide();
    toggle();
 }

 //Visually Indicates how many incorrect answers
 function incrementStrike() {
 let incorrect = parseInt(document.getElementById("incorrect").innerHTML);

  if (incorrect === 1) {
    document.getElementById("strike-1").style.backgroundColor = "red";
    document.getElementById("strike-1").innerHTML = "X";
    
} else if (incorrect === 2) {
  document.getElementById("strike-2").style.backgroundColor = "red";
  document.getElementById("strike-2").innerHTML = "X";
   
} else if (incorrect === 3) {
  alert("One more strike and you´re our buddy...")
  document.getElementById("strike-3").style.backgroundColor = "red";
  document.getElementById("strike-3").innerHTML = "X";
    
} else if (incorrect === 4) {
  alert(`GAME OVER! Your total score is ${parseInt(resultsContainer.innerHTML)}.`);
    
} else {
   
}
};  

 //Clears to prep for next question
 function clear() {
   // Clears lit category

   document.getElementById("c-1").style.backgroundColor = "grey";
   document.getElementById("c-2").style.backgroundColor = "grey";
   document.getElementById("c-3").style.backgroundColor = "grey";
   

   // Clears the radiobuttons
   Array.from( document.querySelectorAll('input[name="test"]:checked'), input => input.checked = false );

   //Clear question
   quizContainer.innerText = "QUESTION";
   optionText1.innerText = "";
   optionText2.innerText = "";
   optionText3.innerText = "";
   document.getElementById("question").innerText = "Next";
   document.getElementById("value").innerText = "Value"
 }
// blink "on" state
 function show()
 {
   document.getElementById("question").style.backgroundColor = "orange";
 }
 // blink "off" state
 function hide()
 {
   document.getElementById("question").style.backgroundColor = "grey";
 }
 //Execute blink function
 function toggle() {
  for(var i=900; i < 4500; i=i+900)
  {
    setTimeout("hide()",i);
    setTimeout("show()",i+450);
  }
 }
 
 // toggle "on" and "off" states every 450 ms to achieve a blink effect
 // end after 4500 ms (less than five seconds)
 

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
