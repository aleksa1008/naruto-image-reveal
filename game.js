const startButton = document.getElementById("start-button");
const instructionsScreen = document.getElementById("instructions");
const gameScreen = document.getElementById("game-screen");
const box = document.getElementById("box");
const isScore = document.getElementById("score");
let isDragging = false;
let initialMouseX;
let initialElementX;
let missedCount = 0;
const maxMisses = 2;
let score = 0;
let objectPosition = 0;
let newLeft = 0;

startButton.addEventListener("click", () => {
  instructionsScreen.style.display = "none";
  gameScreen.style.display = "block";
});

box.addEventListener("mousemove", (e) => {
  isDragging = true;
  initialMouseX = e.clientX;
  initialElementX = box.offsetLeft;
});

gameScreen.addEventListener("mousemove", (e) => {
  if (isDragging === false) return;
  const currentMouseX = e.clientX;
  const deltaX = currentMouseX - initialMouseX;
  let newLeft = initialElementX + deltaX;
  const maxLeft = gameScreen.clientWidth - box.clientWidth;
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  box.style.left = newLeft + "px";
});

function createFallingObjects() {
  const object = document.createElement("div");
  object.classList.add("fallingObjects");
  object.style.left = newLeft + "px";
  gameScreen.appendChild(object);

  const objectInterval = setInterval(() => {
    objectPosition += 5;
    object.style.top = objectPosition + "px";

    const objectRect = object.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();

    if (
      objectRect.bottom >= boxRect.top &&
      objectRect.left <= boxRect.right &&
      objectRect.right >= boxRect.left
    ) {
      score++;
      score = `Score: ${score}`;
      object.remove();
      clearInterval(objectInterval);
    }
  });
}

setInterval(createFallingObjects, 1500);
