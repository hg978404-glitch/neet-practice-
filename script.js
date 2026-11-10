const questions = [
  {subject:"biology", q:"The powerhouse of the cell is:", options:["Ribosome","Mitochondria","Nucleus","Golgi body"], answer:1},
  {subject:"biology", q:"DNA replication is generally:", options:["Conservative","Semi-conservative","Dispersive only","Random"], answer:1},
  {subject:"chemistry", q:"The SI unit of amount of substance is:", options:["Gram","Mole","Litre","Molarity"], answer:1},
  {subject:"chemistry", q:"The pH of a neutral solution at 25°C is approximately:", options:["0","5","7","14"], answer:2},
  {subject:"physics", q:"The SI unit of force is:", options:["Joule","Newton","Watt","Pascal"], answer:1},
  {subject:"physics", q:"Acceleration due to gravity near Earth's surface is approximately:", options:["9.8 m/s²","98 m/s²","0.98 m/s²","4.9 m/s²"], answer:0}
];

let testQuestions = [], current = 0, score = 0, timeLeft = 60, timer;

const $ = id => document.getElementById(id);

$("startBtn").onclick = startTest;
$("restartBtn").onclick = startTest;
$("nextBtn").onclick = nextQuestion;

function startTest() {
  const subject = $("subject").value;
  testQuestions = questions.filter(x => subject === "all" || x.subject === subject);
  testQuestions = [...testQuestions].sort(() => Math.random() - 0.5);
  current = 0; score = 0;
  $("result").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 60;
  $("nextBtn").classList.add("hidden");
  const item = testQuestions[current];
  $("progress").textContent = `Question ${current + 1} / ${testQuestions.length}`;
  $("timer").textContent = `⏱️ ${timeLeft}s`;
  $("question").textContent = item.q;

  const box = $("options");
  box.innerHTML = "";
  item.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `${String.fromCharCode(65+i)}. ${text}`;
    btn.onclick = () => chooseAnswer(i, btn);
    box.appendChild(btn);
  });

  timer = setInterval(() => {
    timeLeft--;
    $("timer").textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      chooseAnswer(-1, null);
    }
  }, 1000);
}

function chooseAnswer(selected, selectedBtn) {
  clearInterval(timer);
  const item = testQuestions[current];
  document.querySelectorAll(".option").forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.answer) btn.classList.add("correct");
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
