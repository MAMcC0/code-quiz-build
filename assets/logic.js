
var questions = $('.question');
var answerChoices = $('.answer-choice');
var endGamePage = $('.endgame');
var timerDisplay = $('#count-timer')
var feedback = $(".feedback");


//gen variables
var score = timerDisplay;
//score
//time
//timer
var questionsLeft = questions[i];



// on start button click startGame function
function startQuiz(){

}
//start game function
//hide intro start screen

//render first question to the screen, show multiple choice answers
//call funtion 


//timer starts timer = setInterval(function(),1000)
//time display

//rend question function
// change hidden value of questions div
// variable with an array of object
// var questions = [
//     {
//         title: "JS question",
//         answerChoices: [1,2,3,4],
//         correctAnswer: "answer"
//     }
// ]


//reference index of question to display on screen
//increment question index variable
//grab html reference to header to attach question title to question[0].title append
//grab html reference push question answers to an array loop through answers create list el or button and append to ul
// add eventlistener to the answer choices/div that holds answer choices event.target matches the correct answer
//function checkAnswer ()
// variable selectedAnswer = event.target
// if (selectedAnswer === question[0].correctAnswer)

        // provide correct feedback
        //Dom add in element 

// else {
//     //provide incorrect feedback
//     //penalize time global time var and subtract time-= time taken off
// }

// function startTimer 
function startTimer() {
    
    var timerInterval = setInterval(function(){
      timerCount --;
      timerElement.innerHTML = timerCount;
      if(timerCount === 0){
        clearInterval(timerInterval);
        endQuiz();
      }
      if(isWin){
        clearInterval(timerInterval);
      };
    },1000)}
    
// time --;
// re render time on screen

//warning close to zero

// check timer if statement
// if time === 0, clearInterval then end quiz else keep running this function

//end quiz function
//hide question and display intial forms
//display final score
//eventListener intials and score to local storage setItem("key",value)
//getItem JSON.parse
//stores score in an array and stringify to put in local storage pass the most rcent to array and store again

// Highscores page
//pull scores from local storage div with ol make references to those in ol
//order high scores from highest to lowest
// need buttons for html for go back and clear local storage

$('.start-button').click(startQuiz);