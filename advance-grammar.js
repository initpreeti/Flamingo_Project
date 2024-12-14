// Data for Advanced Grammar Topics
const grammarTopics = [
    {
      title: "Subjunctive Mood",
      description: "Learn how to use the subjunctive mood to express wishes, hypotheticals, and commands.",
      example: "If I were you, I would study more."
    },
    {
      title: "Passive Voice",
      description: "Master the art of passive construction for formal writing.",
      example: "The report was completed by the team."
    },
    {
      title: "Conditionals",
      description: "Understand zero, first, second, and third conditional forms.",
      example: "If it rains, I will stay home."
    },
    {
      title: "Clauses",
      description: "Learn about relative, adverbial, and noun clauses.",
      example: "I know a place where we can relax."
    },
    {
      title: "Reported Speech",
      description: "Convert direct speech into indirect speech effectively.",
      example: "He said that he was tired."
    },
  ];
  
  // Function to dynamically generate course boxes
  function displayCourses() {
    const container = document.getElementById("course-container");
    grammarTopics.forEach(topic => {
      const courseBox = document.createElement("div");
      courseBox.classList.add("course-box");
      courseBox.innerHTML = `
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <p><strong>Example:</strong> ${topic.example}</p>
        <button onclick="startLesson('${topic.title}')">Start Lesson</button>
      `;
      container.appendChild(courseBox);
    });
  }
  
  // Function to handle starting lessons
  function startLesson(topic) {
    alert(`Starting the lesson on ${topic}. Get ready to dive in!`);
  }
  
  // Function to show feedback
  function showFeedback() {
    const feedbackDiv = document.getElementById("feedback-result");
    feedbackDiv.style.display = "block";
    feedbackDiv.innerHTML = `
      <p>Great job! You're mastering advanced grammar. Keep practicing to improve further.</p>
    `;
  }
  
  // Initialize Courses
  document.addEventListener("DOMContentLoaded", displayCourses);
  