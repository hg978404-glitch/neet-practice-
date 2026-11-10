# neet-practice-
Neet 2027 online practice - physics, chemistry, biology 
<!DOCTYPE html>  <html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
  <title>NEET Practice</title>  
  <style>  
    :root {  
      --bg-1: #eef6ff;  
      --bg-2: #edf4ff;  
      --panel: rgba(255, 255, 255, 0.92);  
      --primary: #2457d6;  
      --primary-dark: #173eae;  
      --primary-soft: #ecf3ff;  
      --text: #172033;  
      --muted: #60708b;  
      --border: #dde7f5;  
      --shadow: 0 12px 28px rgba(23, 32, 51, 0.08);  
      --success-bg: #dff5e5;  
      --success-border: #4fa66d;  
      --wrong-bg: #fde2e2;  
      --wrong-border: #d86060;  
      --option-bg: #f7f9fc;  
      --radius: 18px;  
    }  * {  
  box-sizing: border-box;  
}  

body {  
  margin: 0;  
  min-height: 100vh;  
  font-family: Arial, sans-serif;  
  background: linear-gradient(180deg, var(--bg-1), var(--bg-2));  
  color: var(--text);  
}  

button, select {  
  font: inherit;  
}  

.app-shell {  
  max-width: 860px;  
  margin: 0 auto;  
  padding: 24px 18px 42px;  
}  

.topbar {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 20px;  
}  

.brand {  
  font-weight: 800;  
  color: var(--primary);  
  font-size: 1.2rem;  
  letter-spacing: 0.02em;  
}  

.chip {  
  background: var(--primary-soft);  
  color: var(--primary);  
  border-radius: 999px;  
  padding: 8px 14px;  
  font-size: 0.8rem;  
  font-weight: 700;  
}  

.hero {  
  margin-bottom: 20px;  
}  

.eyebrow {  
  margin: 0 0 8px;  
  text-transform: uppercase;  
  letter-spacing: 1.3px;  
  color: var(--primary);  
  font-size: 0.72rem;  
  font-weight: 700;  
}  

h1 {  
  margin: 0;  
  font-size: clamp(2.2rem, 5vw, 3.3rem);  
  line-height: 1.08;  
}  

.panel {  
  background: var(--panel);  
  border: 1px solid var(--border);  
  border-radius: var(--radius);  
  box-shadow: var(--shadow);  
  padding: 22px 20px;  
  backdrop-filter: blur(5px);  
}  

.controls {  
  display: flex;  
  gap: 16px;  
  align-items: end;  
  flex-wrap: wrap;  
}  

label {  
  flex: 1;  
  min-width: 220px;  
  font-weight: 700;  
}  

select, button {  
  width: 100%;  
  padding: 13px 14px;  
  margin-top: 8px;  
  border-radius: 12px;  
  border: 1px solid var(--border);  
  font-size: 16px;  
}  

button {  
  background: var(--primary);  
  color: white;  
  border: none;  
  font-weight: 700;  
  cursor: pointer;  
  transition: transform 0.15s ease, background 0.15s ease;  
}  

button:hover {  
  background: var(--primary-dark);  
  transform: translateY(-1px);  
}  

.controls button {  
  flex: 0 0 180px;  
  width: auto;  
}  

.quiz {  
  margin-top: 18px;  
}  

.topline {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  gap: 12px;  
  font-weight: 700;  
  margin-bottom: 14px;  
}  

.timer-track {  
  width: 100%;  
  height: 11px;  
  background: #edf2fa;  
  border-radius: 999px;  
  overflow: hidden;  
  margin-bottom: 18px;  
}  

.timer-bar {  
  width: 100%;  
  height: 100%;  
  background: linear-gradient(90deg, #34c17a 0%, #2457d6 100%);  
  border-radius: inherit;  
  transition: width 1s linear;  
}  

#question {  
  margin: 0 0 16px;  
  font-size: clamp(1.35rem, 2.2vw, 2rem);  
  line-height: 1.4;  
}  

.options {  
  display: flex;  
  flex-direction: column;  
  gap: 10px;  
}  

.option {  
  width: 100%;  
  text-align: left;  
  background: var(--option-bg);  
  color: var(--text);  
  border: 1px solid var(--border);  
  border-radius: 12px;  
  padding: 14px 16px;  
  font-weight: 600;  
  margin-top: 0;  
}  

.option:hover {  
  background: #edf4ff;  
}  

.option.correct {  
  background: var(--success-bg);  
  border-color: var(--success-border);  
}  

.option.wrong {  
  background: var(--wrong-bg);  
  border-color: var(--wrong-border);  
}  

.option:disabled {  
  cursor: default;  
  opacity: 1;  
}  

.next {  
  margin-top: 20px;  
}  

.result {  
  margin-top: 18px;  
  text-align: center;  
}  

.result h2 {  
  margin: 0 0 12px;  
}  

#score {  
  margin: 0 0 18px;  
  color: var(--muted);  
  font-size: 1.08rem;  
}  

.hidden {  
  display: none;  
}  

@media (max-width: 560px) {  
  .controls {  
    align-items: stretch;  
  }  

  .controls button {  
    width: 100%;  
    flex-basis: auto;  
  }  

  .topbar {  
    flex-direction: column;  
    align-items: flex-start;  
    gap: 10px;  
  }  
}

  </style>  
</head>  
<body>  
  <main class="app-shell">  
    <nav class="topbar">  
      <div class="brand">🧬 NEET Practice</div>  
      <div class="chip">Daily Prep</div>  
    </nav>  <header class="hero">  
  <p class="eyebrow">Smart exam preparation</p>  
  <h1>Practice smarter. Score higher.</h1>  
</header>  

<section class="controls panel">  
  <label for="subject">  
    Subject  
    <select id="subject">  
      <option value="all">All Subjects</option>  
      <option value="biology">Biology</option>  
      <option value="chemistry">Chemistry</option>  
      <option value="physics">Physics</option>  
    </select>  
  </label>  

  <button id="startBtn">Start Test</button>  
</section>  

<section id="quiz" class="quiz panel hidden">  
  <div class="topline">  
    <span id="progress">Question 1 / 1</span>  
    <span id="timer">⏱️ 60s</span>  
  </div>  

  <div class="timer-track">  
    <div id="timerBar" class="timer-bar"></div>  
  </div>  

  <h2 id="question">Question</h2>  
  <div id="options" class="options"></div>  
  <button id="nextBtn" class="next hidden">Next Question →</button>  
</section>  

<section id="result" class="result panel hidden">  
  <h2>🎯 Test Complete!</h2>  
  <p id="score">You scored 0 / 0.</p>  
  <button id="restartBtn">Try Again</button>  
</section>

  </main>    <script>  
    const questions = [  
      { subject: "biology", q: "The powerhouse of the cell is:", options: ["Ribosome", "Mitochondria", "Nucleus", "Golgi body"], answer: 1 },  
      { subject: "biology", q: "DNA replication is generally:", options: ["Conservative", "Semi-conservative", "Dispersive only", "Random"], answer: 1 },  
      { subject: "biology", q: "Which blood cells are responsible for oxygen transport?", options: ["Platelets", "White blood cells", "Red blood cells", "Plasma cells"], answer: 2 },  
      { subject: "biology", q: "The site of protein synthesis in a cell is:", options: ["Mitochondria", "Ribosome", "Lysosome", "Nucleus"], answer: 1 },  
  
      { subject: "chemistry", q: "The SI unit of amount of substance is:", options: ["Gram", "Mole", "Litre", "Molarity"], answer: 1 },  
      { subject: "chemistry", q: "The pH of a neutral solution at 25°C is approximately:", options: ["0", "5", "7", "14"], answer: 2 },  
      { subject: "chemistry", q: "Which gas is released during respiration?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2 },  
      { subject: "chemistry", q: "An atom with atomic number 11 is:", options: ["Neon", "Sodium", "Magnesium", "Aluminium"], answer: 1 },  
  
      { subject: "physics", q: "The SI unit of force is:", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1 },  
      { subject: "physics", q: "Acceleration due to gravity near Earth's surface is approximately:", options: ["9.8 m/s²", "98 m/s²", "0.98 m/s²", "4.9 m/s²"], answer: 0 },  
      { subject: "physics", q: "Which quantity is measured in joules?", options: ["Force", "Pressure", "Energy", "Velocity"], answer: 2 },  
      { subject: "physics", q: "The speed of light in vacuum is approximately:", options: ["3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^10 m/s", "3 x 10^12 m/s"], answer: 1 }  
    ];  
  
    let testQuestions = [];  
    let current = 0;  
    let score = 0;  
    let timeLeft = 60;  
    let timer;  
  
    const $ = (id) => document.getElementById(id);  
  
    $("startBtn").onclick = startTest;  
    $("restartBtn").onclick = startTest;  
    $("nextBtn").onclick = nextQuestion;  
  
    function startTest() {  
      const subject = $("subject").value;  
      testQuestions = questions.filter((q) => subject === "all" || q.subject === subject);  
  
      if (testQuestions.length > 0) {  
        testQuestions = [...testQuestions].sort(() => Math.random() - 0.5);  
      }  
  
      current = 0;  
      score = 0;  
  
      $("result").classList.add("hidden");  
      $("quiz").classList.remove("hidden");  
      $("nextBtn").classList.add("hidden");  
  
      if (testQuestions.length === 0) {  
        $("quiz").classList.add("hidden");  
        $("result").classList.remove("hidden");  
        $("score").textContent = "No questions available for this subject.";  
        return;  
      }  
  
      showQuestion();  
    }  
  
    function showQuestion() {  
      clearInterval(timer);  
  
      const item = testQuestions[current];  
      timeLeft = 60;  
      updateTimerUI();  
  
      $("progress").textContent = `Question ${current + 1} / ${testQuestions.length}`;  
      $("question").textContent = item.q;  
  
      const box = $("options");  
      box.innerHTML = "";  
  
      item.options.forEach((text, i) => {  
        const btn = document.createElement("button");  
        btn.type = "button";  
        btn.className = "option";  
        btn.textContent = `${String.fromCharCode(65 + i)}. ${text}`;  
        btn.onclick = () => chooseAnswer(i, btn);  
        box.appendChild(btn);  
      });  
  
      $("nextBtn").classList.add("hidden");  
  
      timer = setInterval(() => {  
        timeLeft--;  
        updateTimerUI();  
  
        if (timeLeft <= 0) {  
          clearInterval(timer);  
          chooseAnswer(-1, null);  
        }  
      }, 1000);  
    }  
  
    function updateTimerUI() {  
      $("timer").textContent = `⏱️ ${timeLeft}s`;  
      const percent = (timeLeft / 60) * 100;  
      $("timerBar").style.width = `${percent}%`;  
    }  
  
    function chooseAnswer(selected, selectedBtn) {  
      clearInterval(timer);  
  
      const item = testQuestions[current];  
      const optionButtons = document.querySelectorAll(".option");  
  
      optionButtons.forEach((btn, i) => {  
        btn.disabled = true;  
  
        if (i === item.answer) {  
          btn.classList.add("correct");  
        }  
      });  
  
      if (selected === item.answer) {  
        score++;  
      } else if (selectedBtn) {  
        selectedBtn.classList.add("wrong");  
      }  
  
      $("nextBtn").classList.remove("hidden");  
    }  
  
    function nextQuestion() {  
      current++;  
  
      if (current < testQuestions.length) {  
        showQuestion();  
      } else {  
        $("quiz").classList.add("hidden");  
        $("result").classList.remove("hidden");  
        $("score").textContent = `You scored ${score} / ${testQuestions.length}.`;  
      }  
    }  
  </script>  </body>  
</html>
