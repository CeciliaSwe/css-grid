// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "How many starter Pokemons can you choose from?",
      a: "1",
      b: "3",
      c: "5",
      answer: 2,
      category: "Pokemon",
  },
  {
    question: "What color is Charmander?",
    a: "Green",
    b: "Blue",
    c: "Orange",
    answer: 3,
    category: "Pokemon",
  },
  {
    question: "Which is not a legendary Pokemon?",
    a: "Heatran",
    b: "Dragonite",
    c: "Lugia",
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
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  shuffle(questions);
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function shuffle(questions) {
  var currentIndex = questions.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [questions[currentIndex], questions[randomIndex]] = [
      questions[randomIndex], questions[currentIndex]];
  }

  return questions;
}

function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);