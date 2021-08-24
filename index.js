// pos is position of where the user in the test or which question they're up to
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;

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
    a: "Creeper",
    b: "Crawler",
    c: "Crowbar",
    answer: 1,
    category: "Minecraft",
  },
  {
    question: "Who created Minecraft?",
    a: "Anders Jansson",
    b: "Johan Larsson",
    c: "Markus Persson",
    answer: 3,
    category: "Minecraft",
  },
  {
    question: "What shape are building blocks?",
    a: "square",
    b: "circular",
    c: "hexagon",
    answer: 1,
    category: "Minecraft",
  },
  {
      question: "What is 3x3",
      a: "9",
      b: "18",
      c: "35",
      answer: 1,
      category: "Maths",
  },
  {
    question: "What is 24 - 8",
    a: "16",
    b: "13",
    c: "19",
    answer: 1,
    category: "Maths",
  },
  {
      question: "What is 4-4",
      a: "2",
      b: "16",
      c: "0",
      answer: 3,
      category: "Maths",
  }
];
// shortened version of getElementById function  
function get(x){
  return document.getElementById(x);
}

// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
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
  get("test_status").innerHTML = "Question "+(pos+1);
  
  //define the index of the question using the position variable
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;

  // display the question in the test div
  test.innerHTML = question;

  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
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