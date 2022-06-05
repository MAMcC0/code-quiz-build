//  var questions = document.querySelector("hide");
var questionHead = document.querySelector(".question");
var answerChoices = document.querySelector("#answers");
var endGameCard = document.querySelector("#endgame-card");
var endGamePage = document.querySelector(".endgame");
var endGameScore = document.querySelector(".endgame-desc");
var timerText = document.querySelector(".text-timer");
var timerDisplay = document.querySelector("#count-timer");
var feedback = document.getElementsByClassName("feedback");
var scoreDisplay = document.querySelector(".score");
var initialSubmit = document.querySelector("#score-submit");
var startbtn = document.getElementById("start-button");
var landingPage = document.getElementsByClassName("landing-main");
var landing = document.getElementById("landing");
var quesLanding = document.getElementById("quiz-card");
var landingPara = document.getElementsByClassName("paragraph-description");
var scoreLanding = document.querySelector("#highscore-card");
var highscoreLink = document.querySelector("#high-link");
var highscoreOl = document.querySelector(".highscore-list");
var score = 0;
var time = 70;
var inputIndex = 0;
var questionsIndex = 0;
var scoreSpliceStart = 0;
var scoreIndex = 2;

var questionsArray = [
  {
    question: "Which of the following is a primative data type in Javascript",
    possibleAns: ["sentence", "truthy", "int", "boolean"],
    correctAns: "boolean",
  },
  {
    question: "What are the two types of scope JavaScript uses",
    possibleAns: [
      "Global and Local",
      "Surrounding and Inner",
      "Abroad and Local",
      "Outside and Inside",
    ],
    correctAns: "Global and Local",
  },
  {
    question:
      "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
    possibleAns: [
      "git change test branch",
      "git commit test-branch",
      "git merge test-branch",
      "git checkout test-branch",
    ],
    correctAns: "git checkout test-branch",
  },
  {
    question:
      "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?",
    possibleAns: [
      "setInterval(myTimer, 3)",
      "setInterval(myTimer, 300)",
      "setInterval(myTimer, 3000)",
      "setInterval(myTimer, 30)",
    ],
    correctAns: "setInterval(myTimer, 3000)",
  },
  {
    question:
      " You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
    possibleAns: [
      "git branch feature-52",
      "git merge feature-52",
      "git branch -d feature-52",
      "git checkout feature-52",
    ],
    correctAns: "git branch -d feature-52",
  },
  {
    question:
      "Which property can you use in order to implement event delegation?",
    possibleAns: [
      "event.addEventListener()",
      "event.target",
      "event.stopPropagation()",
      "event.preventDefault()",
    ],
    correctAns: "event.target",
  },
];

// on start button click startGame function
function startQuiz() {
  // debugger;
  console.log("startQuiz has started");
  console.log(quesLanding.style);
  if (quesLanding.className === "hide") {
    console.log(quesLanding.style.display);
    //target css instead of html
    quesLanding.className = "show";
    answerChoices.className = "show";
    landing.className = "hide";
    landingPara.className = "hide";
  }
  renderQuestions();
  timer();
}

function renderQuestions() {
  var questionDisplay = questionsArray[questionsIndex].question;
  questionHead.textContent = questionDisplay;
    
  console.log("rendQuest function has started");
  var answersLength = questionsArray[questionsIndex].possibleAns.length;
  for (var i = 0; i < answersLength; i++) {
    var buttonEl = document.getElementById(i);
    var ans = questionsArray[questionsIndex].possibleAns[i];
    buttonEl.textContent = ans;
  }
  if (questionsIndex === 5) {
    time = 0;
    endQuiz();
  }
}

function checkAns(event) {
  var answerInput = event.target;
  var answerCheck = answerInput.textContent;

  if (answerCheck === questionsArray[questionsIndex].correctAns) {
    feedback[0].textContent = "Good Job!";
    score += 10;
    scoreDisplay.textContent = score;
  } else {
    feedback[0].textContent = "Wrong!";
    score -= 5;
    time -= 10;
  }
  // if (questionsIndex === 5){
  //     endQuiz();
  //}
  questionsIndex++;
  renderQuestions();
}

function timer() {
  var timerInterval = setInterval(function () {
    time--;
    timerText.textContent = "Time:" + time;

    if (time === 0 || questionsIndex === 5) {
      clearInterval(timerInterval);
      var headsUp = document.createElement("h3");
      var headsText = document.createTextNode("Time's Up!");
      headsUp.appendChild(headsText);
      quesLanding.appendChild(headsUp);
      endQuiz();
      // storeScore();
    }
    if (time === 10) {
      var headsUp = document.createElement("h3");
      var headsText = document.createTextNode("You're almost out of time!");
      headsUp.appendChild(headsText);
      quesLanding.appendChild(headsUp);
    }
  }, 1000);
}

function endQuiz() {
  console.log("endGame function has started");
  if (endGameCard.className === "hide") {
    quesLanding.className = "hide";
    answerChoices.className = "hide";
    timerText.className = "hide";
    endGameCard.className = "show";
    endGamePage.className = "show";
    scoreDisplay.textContent = "Final score:" + score;
  }
}

function storeScore() {


  var userInput = document.querySelector("#initials").value;
  var storedArray = [];
 
  var storageArray = {
    scoreDis: score,
    initials: userInput
  };
  storedArray.push(storageArray);

  localStorage.setItem("scoreStored", JSON.stringify(storedArray));

  if (scoreLanding.className === "hide") {
    endGameCard.className = "hide";
    endGamePage.className = "hide";
    highscoreLink.className = "hide";
    scoreLanding.classList = "show";
    scoresRender();
  }
}

function scoresRender() {
    var storageArray = JSON.parse(localStorage.getItem("scoreStored")) || [];
    console.log(storageArray);
    storageArray.sort(function (a, b) {
      return b.scoreDis - a.scoreDis;
    });
    
    for (i = 0; i <= storageArray.length; i++) {
    var scoreNameDisName = document.createTextNode(
      storageArray[i].scoreDis + "- " + storageArray[i].initials
    );
    console.log(storageArray.scoreDis);
    var liEl = document.createElement("li");
    liEl.appendChild(scoreNameDisName);
    highscoreOl.appendChild(liEl);
    
  }

  // renderDisplay.onload = function();
}

function toHighScores(){
    if (scoreLanding.className === "hide") {
        quesLanding.className = "hide";
        answerChoices.className = "hide";
        timerText.className = "hide";
        endGameCard.className = "hide";
        endGamePage.className = "hide";
        highscoreLink.className = "hide";
        landing.className = "hide";
        landingPara.className = "hide";
        scoreLanding.classList = "show";
        scoresRender();
}
}

// highscore render
// loop through creation of li score and name appended together from array in display?
//append child to ol
//pull scores from local storage div with ol make references to those in ol
//order high scores from highest to lowest
// need buttons for html for go back and clear local storage

startbtn.addEventListener("click", startQuiz);
answerChoices.addEventListener("click", checkAns);
initialSubmit.addEventListener("click", storeScore);
highscoreLink.addEventListener("click", toHighScores);