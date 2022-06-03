
var questions = document.getElementsByClassName("question");
var answerChoices = document.getElementsByClassName("answer-choice");
var endGamePage = document.getElementsByClassName("endgame");
var timerText = document.querySelector(".text-timer");
var timerDisplay=document.querySelector(".count-timer")
var feedback = document.getElementsByClassName("feedback");
var score = document.getElementsByClassName("score");
var startbtn = document.getElementById("start-button");
var landingPage = document.getElementsByClassName("landing-main");
var landing = document.getElementById("landing");
var quesLanding = document.getElementById("quiz-card")
var landingPara = document.getElementsByClassName("paragraph-description");
var userInput = document.getElementsByClassName("user-input");
var score = 0;
var time = 70;
// var questionsLeft = questions[i];


var questionsArray = [
    {
        question: "Which of the following is a primative data type in Javascript",
        possibleAns: ["sentence", "truthy", "int", "boolean"],
        correctAns: "D"
    },
    {
        question: "What are the two types of scope JavaScript uses",
        possibleAns: ["Global and Local", "Surrounding and Inner", "Abroad and Local", "Outside and Inside"],
        correctAns: "A"
    },
    {
        question: "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
        possibleAns: ["git change test branch", "git commit test-branch", "git merge test-branch", "git checkout test-branch"],
        correctAns: "D"
    },
    {
        question: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
        possibleAns: ["setInterval(myTimer, 3)", "setInterval(myTimer, 300)", "setInterval(myTimer, 3000)", "setInterval(myTimer, 30)"],
        correctAns: "C"
    },
    {
        question: " You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
        possibleAns: ["git branch feature-52", "git merge feature-52", "git branch -d feature-52", "git checkout feature-52"],
        correctAns: "C"
    },
    {
        question: "Which property can you use in order to implement event delegation?",
        possibleAns: ["event.addEventListener()", "event.target", "event.stopPropagation()", "event.preventDefault()"],
        correctAns: "B"
    }
];






// on start button click startGame function
function startQuiz() {
    console.log("startQuiz has started")
    if (quesLanding.style.display === "none") {
        questions.setAttribute('style', "display: block");
        answerChoices.setAttribute('style', "display: block");
        landing.setAttribute('style', "display: none");
        landingPara.setAttribute('style', "display: none");
        
    }
    renderQuestions();
    timer();

};

function renderQuestions() {
   
    console.log("rendQuest function has started");
    //  questionsArray.forEach(questions => {
    //      for (let question in questions) {
    //          questions.innerHTML = question;
    //          console.log(question)
    //      }
    //  })
    //  questionsArray.forEach(answerChoices => {
    //      for (let possibleAns in answerChoices) {
    //          answerChoices.innerHTML = possibleAns;
    //          console.log(possibleAns);
    //      }
    //  })
    
     
      for(var i = 0; i < questionsArray.length; i++){
          var questionDisplay = questionsArray[i].question;

         questionDisplay = questions;

          console.log(questionDisplay)
      }
 }


//render first question to the screen, show multiple choice answers
//call funtion 


//timer starts timer = setInterval(function(),1000)
//time display



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
function timer() {
    var timerInterval = setInterval(function () {
        time--;
        timerText.textContent = "Time:" + time;
        
        if (time === 0) {
            clearInterval(timerInterval);
            var headsUp = document.createElement('h3');
            var headsText = document.createTextNode("Time's Up!");
            headsUp.appendChild(headsText);
            quesLanding.appendChild(headsUp)
            endQuiz()
            storeScore();
        }
        if (time === 10) {
            var headsUp = document.createElement('h3');
            var headsText = document.createTextNode("You're almost out of time!");
            headsUp.appendChild(headsText);
            quesLanding.appendChild(headsUp)
        }
        // if (time >= 0){
        //     if (endGamePage && time > 0){
        //         clearInterval(timerInterval);
        //         storeScore();
        //     }
        // }

    }, 1000)
}

// time --;
// re render time on screen




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