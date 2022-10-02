// timer functionality
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

//selects element questions
var questions = document.querySelector(".questions");

//selects element questions
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");


var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Quiz time "+ secondsLeft ;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "Your Time is Up, Try again";

  // var imgEl = document.createElement("img");
  // imgEl.setAttribute("src", "images/image_1.jpg");
  // mainEl.appendChild(imgEl);

}

// setTime();

//set main page quiz start

var mainText = document.querySelector(".mainText");
mainText.children[0].textContent = "Coding Quiz Challenge";
mainText.children[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
mainText.children[2].textContent = "Start Quiz"; 
// remember set up attributes


//listen start and clear
// Access start quiz bottom HTML element
var startQuiz = document.querySelector("#startQuiz");

// If start quiz clicked start displaying the questions and start counter
function statingquiz(event){
    //setting up question list
    var qa = [
        ["question1","option1","option2","option3","option4","1"],
        ["question2","option1","option2","option3","option4","answer"],
        ["question3","option1","option2","option3","option4","answer"],
        ["question4","option1","option2","option3","option4","1"],
        ]
        mainText.style.display= "none";
        timeEl.style.display = "block";
        setTime();
        // mainText.setAttribute("display", "none");
        questions.style.display="block";

    for(var i = 0 ; i < qa.length; i++){
        console.log("Array position is: " + i )
            
        // var questions = document.querySelector(".questions");
        questions.children[0].textContent = qa[i][0];
        answer1.textContent = qa[i][1];
        answer2.textContent = qa[i][2];
        answer3.textContent = qa[i][3];
        answer4.textContent = qa[i][4];
        
        answer1.addEventListener("click",function() {
            optionSelected = 1;
            console.log("option selected :" + optionSelected);
            if(optionSelected == qa[i][5]){
                questions.children[2].textContent = "Your answer is correct";
             } else questions.children[2].textContent = "Your answer is wrong";
        
             }) ;

    
    
        // event.preventDefault();

        // questions.children[1].children[0].textContent = qa[i][1];
        // questions.children[1].children[1].textContent = qa[i][2];
        // questions.children[1].children[2].textContent = qa[i][3];
        // questions.children[1].children[3].textContent = qa[i][4];

         
        };
        console.log(startQuiz +"start quiz?");
    };    

       

startQuiz.addEventListener("click", statingquiz) ;
