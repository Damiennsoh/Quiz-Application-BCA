// Define the questions and answers
const questions = [  
{    
  question: "What is the capital of France?",    
  answers: {      
    a: "Paris",      
    b: "Madrid",      
    c: "Rome",    
  },    
  correctAnswer: "a",  
},  
{    
  question: 
  "What is the largest planet in our solar system?",    
  answers: {      
    a: "Jupiter",      
    b: "Saturn",      
    c: "Neptune",    
  },    
  correctAnswer: "a",  
},  
{    
  question: "What is the smallest country in the world?",    
  answers: {      
    a: "Monaco",      
    b: "Vatican City",      
    c: "San Marino",   
},    
correctAnswer: "b",  
},
{    
  question: "Where is MMDU located in India?", 
  answers: { 
    a: "Chandigah", 
    b: "Delhi", 
    c: "Mullana", 
  }, 
  correctAnswer: "c",   
},
{    
  question: "What is the full meaning of BCA as a course in MMDU?", 
  answers: {
    a: "Bachelor of Computer Applications", 
    b: "Bachelor of Cardiac Arrest", 
    c: "Bachelor of Computer Science",
  }, 
  correctAnswer: "a", 
},
{    
  question: "Who is the head of the BCA department?", 
  answers: { 
    a: "Vivek Bhatnagar", 
    b: "Gautam Kumar", 
    c: "Dr Rattan Rana",
  }, 
  correctAnswer: "a", 
},
{

// Questions about HTML
  question: "What does HTML stand for?",
  answers: {
  a: "Hyper Text Markup Language",
  b: "Hyperlinks and Text Markup Language",
  c: "Home Tool Markup Language",
  },
  correctAnswer: "a",
  },
  {
  question: "What is the basic structure of an HTML document?",
  answers: {
  a: "DOCTYPE, head, body",
  b: "head, body",
  c: "DOCTYPE, title, head, body",
  },
  correctAnswer: "c",
  },
  {
  question: "What is the purpose of the &lt;head&gt; tag in HTML?",
  answers: {
  a: "To define the main content of the webpage",
  b: "To define the title and metadata of the webpage",
  c: "To define a section of the webpage that contains navigation links",
  },
  correctAnswer: "b",
  },
  {
  question: "What is the purpose of the &lt;img&gt; tag in HTML?",
  answers: {
  a: "To display an image on the webpage",
  b: "To create a hyperlink to another webpage",
  c: "To define a section of the webpage that contains text",
  },
  correctAnswer: "a",
  },
  {
  question: "What is the purpose of the &lt;a&gt; tag in HTML?",
  answers: {
  a: "To create a hyperlink to another webpage or a specific location within the same webpage",
  b: "To display an image on the webpage",
  c: "To define a section of the webpage that contains text",
  },
  correctAnswer: "a",
  },
  {
  question: "What is the purpose of the &lt;div&gt; tag in HTML?",
  answers: {
  a: "To define a section of the webpage that contains navigation links",
  b: "To define a section of the webpage that contains text",
  c: "To group together other HTML elements and apply styles to them",
  },
  correctAnswer: "c",
  },
  {
  question: "What is the purpose of the &lt;table&gt; tag in HTML?",
  answers: {
  a: "To define a section of the webpage that contains text",
  b: "To create a list of items",
  c: "To display data in rows and columns",
  },
  correctAnswer: "c",
  },
  {
  question: "What is the purpose of the &lt;form&gt; tag in HTML?",
  answers: {
  a: "To create a list of items",
  b: "To display an image on the webpage",
  c: "To create a user input area for submitting data to a server",
  },
  correctAnswer: "c",
  },
  {
  question: "What is the purpose of the &lt;ul&gt; and &lt;ol&gt; tags in HTML?",
  answers: {
  a: "&lt;ul&gt; is used to create an unordered list and &lt;ol&gt; is used to create an ordered list",
  b: "&lt;ul&gt; is used to create an ordered list and &lt;ol&gt; is used to create an unordered list",
  c: "Both &lt;ul&gt; and &lt;ol&gt; are used to create unordered lists",
  },
  correctAnswer: "a",
  },
  {
  question: "What is the purpose of the &lt;header&gt; and &lt;footer&gt; tags in HTML?",
  answers: {
  a: "&lt;header&gt; is used to define a section of the webpage that contains navigation links and &lt;footer&gt; is used to define a section that contains copyright information",
  b: "&lt;header&gt; is used to define the main content of the webpage and &lt;footer&gt; is used to define a section of the webpage that contains navigation links",
  c: "&lt;header&gt; is used to define a section of the webpage that contains the title and metadata of the webpage and &lt;footer&gt; is used to define the main content of the webpage",
  },
  correctAnswer: "a",
  },
  
  // Questions for Java programming language
  {
    question: "What is Java?",
    answers: {
      a: "A type of coffee",
      b: "A programming language",
      c: "A type of computer",
    },   
    correctAnswer: "b",
  },
  {
    question: "Who created Java?",
    answers: {
      a: "Steve Jobs",
      b: "Bill Gates",
      c: "James Gosling",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the purpose of the 'public static void main' method in Java?",
    answers: {
      a: "To print the contents of a file to the console",
      b: "To start the execution of a Java program",
      c: "To declare a variable",
    },
    correctAnswer: "b",
  },
  {
    question: "What is a Java package?",
    answers: {
      a: "A collection of related classes and interfaces",
      b: "A type of data structure",
      c: "A way to declare a variable",
    },
    correctAnswer: "a",
  },
  {
    question: "What is a Java interface?",
    answers: {
      a: "A user interface for a Java program",
      b: "A type of class that cannot be instantiated",
      c: "A way to declare aset of methods that a class implementing the interface must implement",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the difference between a Java compiler and a Java interpreter?",
    answers: {
      a: "A compiler translates Java code into machine code, while an interpreter executes Java code directly",
      b: "A compiler executes Java code directly, while an interpreter translates Java code into machine code",
      c: "There is no difference between a compiler and an interpreter in Java",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the purpose of the 'throws' keyword in Java?",
    answers: {
      a: "To declare a new exception class",
      b: "To catch an exception and handle it",
      c: "To indicate that a method may throw a specific type of exception",
    },
    correctAnswer: "c",
  },
  {
    question: "What is a Java thread?",
    answers: {
      a: "A type of class in Java",
      b: "A way to handle exceptions in Java",
      c: "A lightweight process that can run concurrently with other threads",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the difference between an abstract class and an interface in Java?",
    answers: {
      a: "An abstract class can be instantiated, while an interface cannot",
      b: "An abstract class can have method implementations, while an interface cannot",
      c: "There is no difference between an abstract class and an interface in Java",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the purpose of the 'finally' block in a Java try-catch-finally statement?",
    answers: {
      a: "To catch and handle an exception",
      b: "To execute a block of code regardless of whether an exception was thrown or not",
      c: "To declare a new exception",
    },
    correctAnswer: "b",
  },
  {
    question: "Psycaro loves sex paa",
    answers:{
      a: "True",
      b: "False",
      c: "none of "
    },
    correctAnswer: "a",
  },

];

// Define variables for the quiz
let score = 0;
let currentQuestion = 0;

// Restart button
const restartButton = document.getElementById('restart-button');
console.log(restartButton);
restartButton.style.backgroundColor = 'green';

// Adding an event listener to restartButton
restartButton.addEventListener('click', function() {
  //Reset the quiz to its initial state
  currentQuestion = 0; //This sets current question back to its initial state
  score = 0; //This sets the score back to its initial state
// Display the first question again
displayQuestion(questions[currentQuestion]);
});

// Timer functionality
// const timer = document.getElementById('timer');
console.log(timer);
const timeRemainingSpan = document.getElementById("time-remaining");
const startQuizButton = document.getElementById("start-quiz-button");
let timeRemaining = 600; // 10 minutes in seconds

function startTimer() {
  const timer = setInterval(() => {
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeRemainingSpan.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      displayScore();
    }
  }, 1000); // 1 second interval
}

startQuizButton.addEventListener("click", () => {
  console.log("button clicked");
  startTimer();
});

  

// Display the current question and answer choices
const quizContainer = document.getElementById("quiz-container")
startQuizButton.addEventListener("click", function(){
  // show the quiz container and timer
  quizContainer.style.visibility = "visible";
  timer.style.visibility = "visible";
})
function displayQuestion() {
  const question = questions[currentQuestion];
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <h2>${question.question}</h2>
    <ul>
      <li>
        <label>
          <input type="radio" name="answer" value="a">
          ${question.answers.a}
        </label>
      </li>
      <li>
        <label>
          <input type="radio" name="answer" value="b">
          ${question.answers.b}
        </label>
      </li>
      <li>
        <label>
          <input type="radio" name="answer" value="c">
          ${question.answers.c}
        </label>
      </li>
    </ul>
    <button onclick="submitAnswer()">Submit</button>
  `;
}

// Submit the user's answer and check if it's correct
function submitAnswer() {
  const answer = document.querySelector('input[name="answer"]:checked').value;
  const question = questions[currentQuestion];
  if (answer === question.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

// Display the user's score
function displayScore() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <h2>Your Score</h2>
    <p>You got ${score} out of ${questions.length} questions correct.</p>
  `;
}

// creating a function for the Download CV button so that when clicked, the file will actually download.
function downloadResume() {
  const url = "https://example.com/resume.pdf"; // replace with the URL of your resume file
  const filename = "Damien.pdf"; // replace with the name you want to give to the downloaded file

  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
}

// Start the quiz
displayQuestion();
