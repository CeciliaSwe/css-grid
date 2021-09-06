
    function buildQuiz(){
      // variable to store the HTML output
      const outputQ = [];
      const outputA = [];
  
      // for each question...
      myQuestions.forEach(
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
  
      // display Q and A in separate containers
      quizContainer.innerHTML = outputQ;
      optionContainer.innerHTML = outputA;
    }
  
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
    const myQuestions = [
      {
        question: "What is the name of the yellow starter Pokemón?",
        answers: {
          a: "Charmander",
          b: "Bulbasaur",
          c: "Pikachu"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
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