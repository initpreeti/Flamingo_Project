// Quiz Questions
const quizQuestions = [
    {
      question: "What is the synonym of 'Happy'?",
      options: ["Sad", "Joyful", "Angry", "Bored"],
      correct: 1,
    },
    {
      question: "What is the opposite of 'Big'?",
      options: ["Small", "Tall", "Wide", "Round"],
      correct: 0,
    },
    {
      question: "What does 'Fast' mean?",
      options: ["Slow", "Quick", "Late", "Steady"],
      correct: 1,
    },
    {
      question: "What is the synonym of 'Beautiful'?",
      options: ["Ugly", "Attractive", "Plain", "Dirty"],
      correct: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start Quiz
  function startQuiz() {
    document.getElementById("quizModal").style.display = "flex";
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  // Show Question
  function showQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    document.getElementById("quiz-question").innerText = questionData.question;
  
    const optionsDiv = document.getElementById("quiz-options");
    optionsDiv.innerHTML = ""; // Clear previous options
  
    questionData.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => checkAnswer(index);
      optionsDiv.appendChild(button);
    });
  }
  
  // Check Answer
  function checkAnswer(selectedIndex) {
    const questionData = quizQuestions[currentQuestionIndex];
  
    if (selectedIndex === questionData.correct) {
      alert("Correct!");
      score++;
    } else {
      alert(`Incorrect! Correct answer: ${questionData.options[questionData.correct]}`);
    }
  
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  // End Quiz
  function endQuiz() {
    document.getElementById("quiz-question").style.display = "none";
    document.getElementById("quiz-options").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
  
    const result = document.getElementById("quiz-result");
    result.style.display = "block";
    document.getElementById("final-score").innerText = score;
    document.getElementById("total-questions").innerText = quizQuestions.length;
  
    document.getElementById("restart-btn").style.display = "block";
  }
  
  // Restart Quiz
  function restartQuiz() {
    document.getElementById("quizModal").style.display = "none";
    document.getElementById("quiz-question").style.display = "block";
    document.getElementById("quiz-options").style.display = "block";
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("restart-btn").style.display = "none";
  
    startQuiz();
  }
  