const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// No button runs away 😆
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".buttons");

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button logic 💖
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 2500);
});
