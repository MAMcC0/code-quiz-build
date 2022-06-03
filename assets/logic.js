
var questions = document.getElementsByClassName("question");
var answerChoices = document.getElementsByClassName("answer-choice");
var endGamePage = document.getElementsByClassName("endgame");
var timerDisplay = document.getElementsByClassName("count-timer");
var feedback = document.getElementsByClassName("feedback");
var score = document.getElementsByClassName("score");
var startbtn = document.getElementsByClassName("start-button");
var landingPage = document.getElementsByClassName("landing-main");
var userInput = document.getElementsByClassName("user-input");
var score = 0;
var questionsLeft = questions[i];


var questionsArray = [
    {
        question1: "Which of the following is a primative data type in Javascript",
        possibleAns1: ["sentence", "truthy", "int", "boolean"],
        correctAns1: "D"
    },
    {
        question2: "What are the two types of scope JavaScript uses",
        possibleAns2: ["Global and Local", "Surrounding and Inner", "Abroad and Local", "Outside and Inside"],
        correctAns2: "A"
    },
    {
        question3: "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
        possibleAns3: ["git change test branch", "git commit test-branch", "git merge test-branch", "git checkout test-branch"],
        correctAns3: "D"
    },
    {
        question4: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
        possibleAns4: ["setInterval(myTimer, 3)", "setInterval(myTimer, 300)", "setInterval(myTimer, 3000)", "setInterval(myTimer, 30)"],
        correctAns4: "C"
    },
    {
        question5: " You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
        possibleAns5: ["git branch feature-52", "git merge feature-52", "git branch -d feature-52", "git checkout feature-52"],
        correctAns5: "C"
    },
    {
        question6: "Which property can you use in order to implement event delegation?",
        possibleAns: ["event.addEventListener()", "event.target", "event.stopPropagation()", "event.preventDefault()"],
        correctAns: "B"
    }
];







// on start button click startGame function
function startQuiz() {
    if (questions.style.visibility === hidden && answerChoices.style.visibility === hidden){
            questions.style.visibility = 'visibile';
            answerChoices.style.visibility = 'visibile';
            
          
    }
       
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
 console.log("This timer function has started")
    var timerInterval = setInterval(function () {
        timerCount--;
        timerElement.innerHTML = timerCount;
        if (timerCount === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
        if (isPassed) {
            clearInterval(timerInterval);
        };
    }, 1000)
}

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

startbtn.addEventListener("click", startQuiz);