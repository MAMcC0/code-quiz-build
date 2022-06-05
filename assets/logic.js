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
var reset = document.querySelector(".reset");
var score = 0;
var time = 70;
var inputIndex = 0;
var questionsIndex = 0;

//Array for questions

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
  if (quesLanding.className === "hide") {;
    //hides landing elements and displays question elements using a 
    //class name of hide or show and will show based on css stylings
    //under same class names
    quesLanding.className = "show";
    answerChoices.className = "show";
    landing.className = "hide";
    landingPara.className = "hide";
  }
  renderQuestions();
  timer();
}

function renderQuestions() {
    //uses preset questionsIndex variable to est a local variable to
    //loop through question array objects and render them
  var questionDisplay = questionsArray[questionsIndex].question;
  questionHead.textContent = questionDisplay;
  var answersLength = questionsArray[questionsIndex].possibleAns.length;
  for (var i = 0; i < answersLength; i++) {
    var buttonEl = document.getElementById(i);
    var ans = questionsArray[questionsIndex].possibleAns[i];
    buttonEl.textContent = ans;
  }
  // if the questions index reaches five it sets time to zero and calls 
  // end quiz function as that is the length of the question array of objects
  if (questionsIndex === 5) {
    time = 0;
    endQuiz();
  }
}

function checkAns(event) {
  var answerInput = event.target;
  var answerCheck = answerInput.textContent;
// checks if est local variable matches what was pressed
// then checks if what was pressed is equal to the correctAns obj 
// in array
  if (answerCheck === questionsArray[questionsIndex].correctAns) {
    feedback[0].textContent = "Good Job!";
    score += 10;
    scoreDisplay.textContent = score;
  } else {
    feedback[0].textContent = "Wrong!";
    time -= 10;
  }

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

  //hides question card and timer and shows ending game card with final
  // score displayed
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
    //pulls user input from initals and sets as var
  var userInput = document.querySelector("#initials").value;
  //checks to make sure they submit something a placeholder name is 
  //put
  if (!userInput) {
    userInput = "SecretUser"
  }

  var storedArray = [];
  var storageArray = {
    score: score,
    initials: userInput,
  };

  storedArray.push(storageArray);
  //puts item in local storage
  localStorage.setItem("storedArray", JSON.stringify(storedArray));
// hides endgame card and renders highscore page
  if (scoreLanding.className === "hide") {
    endGameCard.className = "hide";
    endGamePage.className = "hide";
    highscoreLink.className = "hide";
    scoreLanding.classList = "show";
    scoresRender();
  }
}

function scoresRender() {
    //grabs from local storage
  var storageArray = JSON.parse(localStorage.getItem("storedArray")) || [];
//iterates through array to display parts on screen
  for (i = 0; i <= storageArray.length; i++) {
    var scoreNameDisName = document.createTextNode(
      storageArray[i].score + "- " + storageArray[i].initials
    );
    //creates li attaches it to ol
    var liEl = document.createElement("li");
    liEl.appendChild(scoreNameDisName);
    highscoreOl.appendChild(liEl);
  }
}
//function to render highscores page if the link is clicked on
function toHighScores() {
  if (scoreLanding.className === "hide") {
    quesLanding.className = "hide";
    answerChoices.className = "hide";
    timerText.className = "hide";
    endGameCard.className = "hide";
    endGamePage.className = "hide";
    highscoreLink.className = "hide";
    landing.className = "hide";
    landingPara.className = "hide";
    scoreLanding.className = "show";
    scoresRender();
  }
}


startbtn.addEventListener("click", startQuiz);
answerChoices.addEventListener("click", checkAns);
initialSubmit.addEventListener("click", storeScore);
highscoreLink.addEventListener("click", toHighScores);
reset.addEventListener("click", localStorage.clear());
