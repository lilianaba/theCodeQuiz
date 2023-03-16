// timer functionality
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

//selects element questions
var questionsEl = document.querySelector(".questions");

//listen start and clear
// Access start quiz bottom HTML element
var startQuiz = document.querySelector("#startQuiz");

//selects element questions
var questionTitle = document.querySelector("#questionTitle");
var choices = document.querySelector("#choices");
// var answer2 = document.querySelector("#answer2");
// var answer3 = document.querySelector("#answer3");
// var answer4 = document.querySelector("#answer4");

//timer interval
var timerInterval;

var secondsLeft = 60;

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

let index = 0;

function endQuiz() {
  clearInterval(timerInterval);
  // questionsEl.classList.add("hide");
  questionsEl.style.display = "none";
  document.querySelector(".endGame").classList.remove("hide");
  document.querySelector("#score").textContent = secondsLeft;
  document.querySelector("#submit").addEventListener("click", saveScore);
}

function saveScore() {
  let initials = document.querySelector("input").value.trim();
  let scores = JSON.parse(localStorage.getItem("highScores")) || [];
  let newScore = {
    initials: initials,
    score: secondsLeft,
  };
  scores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(scores));
  displayHighScores();
}

function displayHighScores() {
  document.querySelector(".endGame").classList.add("hide");
  document.querySelector(".leaderboard").classList.remove("hide");
  let scores = JSON.parse(localStorage.getItem("highScores")) || [];
  scores.sort(function (a, b) {
    return b.score - a.score;
  });
  for (i = 0; i < scores.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = `Initials: ${scores[i].initials} - Score: ${scores[i].score}`;
    document.querySelector(".thelist").append(liEl);
  }
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "Your Time is Up, Try again";
}

//set main page quiz start
var mainText = document.querySelector(".mainText");
mainText.children[0].textContent = "Coding Quiz Challenge";
mainText.children[1].textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
mainText.children[2].textContent = "Start Quiz";
// remember set up attributes

// If start quiz clicked start displaying the questions and start counter
function startingquiz() {
  mainText.style.display = "none";
  timeEl.classList.remove("hide");
  timeEl.textContent = "Quiz time " + secondsLeft;
  timerInterval = setInterval(function () {
    timeEl.textContent = "Quiz time " + secondsLeft;
    secondsLeft--;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      endQuiz();
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);

  //setting up question list

  // mainText.setAttribute("display", "none");
  questionsEl.style.display = "block";
  showQuestions();
}

function showQuestions() {
  let currentQuestion = questions[index];
  questionTitle.textContent = currentQuestion.title;

  choices.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    console.log("Array position is: " + i);

    // var questions = document.querySelector(".questions");
    let choicebtn = document.createElement("button");
    choicebtn.textContent = currentQuestion.choices[i];
    choices.append(choicebtn);

    choicebtn.onclick = checkAnswer;
  }
}

function checkAnswer() {
  if (this.textContent !== questions[index].answer) {
    secondsLeft -= 15;
    timeEl.textContent = "Quiz time " + secondsLeft;
    if (secondsLeft <= 0) {
      secondsLeft = 0;
      timeEl.textContent = "Quiz time " + secondsLeft;
      endQuiz();
    }
  } else {
    //feddback
  }
  index++;
  if (index === questions.length) {
    endQuiz();
  } else showQuestions();
}

startQuiz.addEventListener("click", startingquiz);
