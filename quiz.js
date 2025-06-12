const questions = [
  // History Questions (7)
  {
      question: "באיזו שנה קמה מדינת ישראל?",
      options: ["1945", "1948", "1952", "1967"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel0.jpg?v=1749725722568",
      caption: "הכרזת העצמאות של מדינת ישראל"
  },
  {
      question: "איזו מדינה הייתה הראשונה שהכירה במדינת ישראל?",
      options: ["צרפת", "ברית המועצות", "ארצות הברית", "בריטניה"],
      answer: 2,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel1.jpg?v=1749725750329",
      caption: "הכרה בינלאומית במדינת ישראל"
  },
  {
      question: "מהו שמו של המבצע לחילוץ יהודי אתיופיה בשנת 1991?",
      options: ["מבצע יונה", "מבצע שלמה", "מבצע חשאי", "מבצע אליהו"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel2.jpg?v=1749725774549",
      caption: "מבצע שלמה - חילוץ יהודי אתיופיה"
  },
  {
      question: "מי היה ראש הממשלה הראשון של ישראל?",
      options: ["דוד בן-גוריון", "מנחם בגין", "גולדה מאיר", "לוי אשכול"],
      answer: 0,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel3.jpg?v=1749724677722",
      caption: "דוד בן-גוריון קורא את מגילת העצמאות"
  },
  {
      question: "באיזו שנה פרצה מלחמת ששת הימים?",
      options: ["1956", "1967", "1973", "1982"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel4.jpg?v=1749724678382",
      caption: "חיילים בכותל המערבי לאחר מלחמת ששת הימים"
  },
  {
      question: "מה היה שם המבצע להקמת המדינה?",
      options: ["מבצע עובדה", "מבצע חורב", "מבצע נחשון", "מבצע מדינה"],
      answer: 2,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel5.jpg?v=1749724679030",
      caption: "לוחמים במלחמת העצמאות"
  },
  {
      question: "באיזו שנה חתמה ישראל על הסכם שלום עם מצרים?",
      options: ["1977", "1979", "1982", "1994"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel6.jpg?v=1749724679740",
      caption: "חתימת הסכם השלום עם מצרים"
  },
  // Geography Questions (6)
  {
      question: "מהו ההר הגבוה ביותר בישראל?",
      options: ["הר מירון", "הר החרמון", "הר ארבל", "הר הצופים"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel7.jpg?v=1749724680357",
      caption: "הר החרמון בשלג"
  },
  {
      question: "איזה ים נמצא ממערב לישראל?",
      options: ["ים המלח", "ים סוף", "ים התיכון", "הכנרת"],
      answer: 2,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel8.jpg?v=1749724681000",
      caption: "חוף ים תיכוני בישראל"
  },
  {
      question: "מהו הנהר הארוך ביותר בישראל?",
      options: ["הירדן", "הירקון", "הקישון", "הליטני"],
      answer: 0,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "נהר הירדן"
  },
  {
      question: "איזו עיר מכונה 'עיר ללא הפסקה'?",
      options: ["ירושלים", "חיפה", "תל אביב", "באר שבע"],
      answer: 2,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "נוף תל אביב בלילה"
  },
  {
      question: "מהו המדבר הגדול בישראל?",
      options: ["מדבר יהודה", "מדבר הנגב", "מדבר סיני", "מדבר צין"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "נוף במדבר הנגב"
  },
  {
      question: "איזו עיר נחשבת לבירת הגליל?",
      options: ["נצרת", "צפת", "טבריה", "כרמיאל"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "נוף בצפת העתיקה"
  },
  // Culture Questions (4)
  {
      question: "מהי השפה הרשמית של מדינת ישראל?",
      options: ["עברית", "אנגלית", "ערבית", "יידיש"],
      answer: 0,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "שפות רשמיות בישראל"
  },
  {
      question: "איזו עיר נחשבת לקדושה לשלוש הדתות?",
      options: ["תל אביב", "ירושלים", "נצרת", "בית לחם"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "ירושלים - עיר קדושה"
  },
  {
      question: "מהו המאכל הלאומי של ישראל?",
      options: ["פלאפל", "חומוס", "שניצל", "מלאווח"],
      answer: 0,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "פלאפל במעטפת פיתה"
  },
  {
      question: "מי נחשב ל'משורר הלאומי' של ישראל?",
      options: ["חיים נחמן ביאליק", "נתן אלתרמן", "לאה גולדברג", "יהודה עמיחי"],
      answer: 0,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "חיים נחמן ביאליק"
  },
  // Modern Israel (3)
  {
      question: "באיזו שנה זכתה ישראל באירוויזיון?",
      options: ["1978", "1998", "2018", "2021"],
      answer: 2,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "נטע ברזילי זוכת אירוויזיון 2018"
  },
  {
      question: "מהו הסטארט-אפ הישראלי שפיתח את Waze?",
      options: ["Waze", "Moovit", "Wix", "Mobileye"],
      answer: 0,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "טכנולוגיה ישראלית"
  },
  {
      question: "כמה פרסי נובל זכו ישראלים?",
      options: ["6", "12", "18", "24"],
      answer: 1,
      image: "https://cdn.glitch.global/02da2978-8055-479c-bc3a-42dee3dbc0c4/israel9.jpg?v=1749724681556",
      caption: "חתני פרס נובל ישראלים"
  }
];

// Game state variables
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const quizImage = document.getElementById("quiz-image");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const scoreDisplay = document.getElementById("score-display");
const retryButton = document.getElementById("retry-button");
const actionButtons = document.getElementById("action-buttons");
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const currentScoreElement = document.getElementById("current-score");
const questionNumber = document.getElementById("question-number");

// Image caption element - fix the selector
const imageCaption = document.querySelector(".image-caption");

function startQuiz() {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];

  // Update question text and number
  questionText.textContent = q.question;
  questionNumber.textContent = `שאלה ${currentQuestion + 1}`;

  // Clear previous state
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  retryButton.classList.add("hidden");
  actionButtons.classList.add("hidden");

  // Update progress
  const progress = ((currentQuestion) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `שאלה ${currentQuestion + 1} מתוך ${questions.length}`;

  // Update current score
  currentScoreElement.textContent = score;

  // Set image and caption
  quizImage.src = q.image;
  if (imageCaption) {
      imageCaption.innerHTML = `<i class="fas fa-info-circle"></i> ${q.caption}`;
  }

  // Create option buttons
  q.options.forEach((opt, idx) => {
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = opt;
      div.addEventListener("click", () => selectOption(idx));
      optionsContainer.appendChild(div);
  });
}

function selectOption(selectedIdx) {
  const correctIdx = questions[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  // Disable all options
  options.forEach(option => {
      option.style.pointerEvents = "none";
  });

  // Mark selected option
  options[selectedIdx].classList.add(selectedIdx === correctIdx ? "correct" : "incorrect");

  // If wrong answer, mark correct one
  if (selectedIdx !== correctIdx) {
      options[correctIdx].classList.add("correct");
  }

  // Show feedback
  if (selectedIdx === correctIdx) {
      feedback.textContent = "תשובה נכונה! כל הכבוד!";
      feedback.classList.add("show", "correct");
      score++;
      currentScoreElement.textContent = score;
  } else {
      feedback.textContent = "לא נכון. התשובה הנכונה היא: " + questions[currentQuestion].options[correctIdx];
      feedback.classList.add("show", "incorrect");
      retryButton.classList.remove("hidden");
  }

  // Show action buttons
  actionButtons.classList.remove("hidden");

  // Update score display
  scoreDisplay.textContent = `ניקוד: ${score}/${questions.length}`;
}

function retryQuestion() {
  loadQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      showFinalScore();
  }
}

function goHome() {
  // Reset quiz state
  currentQuestion = 0;
  score = 0;

  // Show start screen
  startScreen.style.display = "flex";
  quizContainer.style.display = "none";
}

function showFinalScore() {
  questionText.textContent = "סיימת את החידון!";
  questionNumber.textContent = "סיום";
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  retryButton.classList.add("hidden");

  // Update progress to 100%
  progressFill.style.width = "100%";
  progressText.textContent = `סיימת את כל ${questions.length} השאלות`;

  const percentage = Math.round((score / questions.length) * 100);
  let message = "";

  if (percentage >= 80) {
      message = "מצוין! אתה ממש מומחה לישראל!";
  } else if (percentage >= 60) {
      message = "טוב מאוד! יש לך ידע טוב על ישראל";
  } else if (percentage >= 40) {
      message = "לא רע! כדאי להעמיק עוד את הידע שלך";
  } else {
      message = "מומלץ ללמוד עוד על ישראל ועם ישראל";
  }

  scoreDisplay.innerHTML = `
      <div class="score-summary">
          <h3>הציון שלך: ${score}/${questions.length} (${percentage}%)</h3>
          <p>${message}</p>
      </div>
  `;

  // Update action buttons for final screen
  actionButtons.innerHTML = `
      <button class="btn-secondary" onclick="goHome()">
          <i class="fas fa-home"></i>
          חזור לעמוד הבית
      </button>
      <button class="btn-primary" onclick="restartQuiz()">
          <i class="fas fa-redo"></i>
          התחל חידון מחדש
      </button>
  `;

  actionButtons.classList.remove("hidden");
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}