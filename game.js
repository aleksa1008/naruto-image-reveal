// ==========================
// ELEMENT REFERENCES
// ==========================
const startButton = document.getElementById("start-button");
const instructionsScreen = document.getElementById("instructions");
const gameScreen = document.getElementById("game-screen");
const box = document.getElementById("box");
const scoreDisplay = document.querySelector(".score"); 

// ==========================
// GAME STATE VARIABLES
// ==========================
let isDragging = false;  // 🟢 TOGGLED (instead of being tied to mouse hold)
let missedCount = 0;
const maxMisses = 2;
let score = 0;
let fallingInterval;

// ==========================
// BOX MOVEMENT (TOGGLE MODE)
// ==========================

// 🔴 REMOVED: the old mousemove logic tied to box & gameScreen required holding down the mouse
// 🟢 ADDED: click-to-toggle logic — first click picks up, second click drops
box.addEventListener("click", (e) => {
  e.stopPropagation(); // 🟢 prevents clicks from triggering the document listener
  isDragging = !isDragging; // 🟢 toggles dragging on/off

  // 🟢 Visual feedback
  if (isDragging) {
  box.style.cursor = "grabbing";
} else {
  box.style.cursor = "grab";
}
});

// 🟢 Optional: click outside box to stop dragging
document.addEventListener("click", (e) => {
  if (isDragging && e.target !== box) {
    isDragging = false;
    box.style.cursor = "grab";
  }
});

// 🟢 Updated: box follows mouse only when dragging is active
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const gameRect = gameScreen.getBoundingClientRect(); // 🟢 use relative positioning
  const newLeft = e.clientX - gameRect.left - box.clientWidth / 2;

  // 🟢 keeps box within screen bounds
  const boundedLeft = Math.max(0, Math.min(newLeft, gameScreen.clientWidth - box.clientWidth));
  box.style.left = boundedLeft + "px";
});

// ==========================
// FALLING OBJECTS
// ==========================

function createFallingObject() {
  const object = document.createElement("div");
  object.classList.add("fallingObject"); // 🟢 FIXED: was "fallingObjects" (plural) before
  object.style.left = `${Math.random() * (gameScreen.clientWidth - 50)}px`; // 🟢 switched from window.innerWidth
  object.style.top = "0px";
  gameScreen.appendChild(object);

  let objectPosition = 0; // 🟢 moved inside function so each ramen falls independently

  const objectInterval = setInterval(() => {
    objectPosition += 2;
    object.style.top = objectPosition + "px";

    const objectRect = object.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();

    // 🟢 FIXED typo: "lef1" → "left"
    if (
      objectRect.bottom >= boxRect.top &&
      objectRect.left <= boxRect.right &&
      objectRect.right >= boxRect.left
    ) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`; // 🟢 FIXED: was overwriting score variable with text
      object.remove();
      clearInterval(objectInterval);
    }

    // 🟢 Added missed ramen logic
    if (objectPosition > gameScreen.clientHeight) {
      missedCount++;
      object.remove();
      clearInterval(objectInterval);

      if (missedCount >= maxMisses) {
        clearInterval(fallingInterval);
        alert("Game Over!");
      }
    }
  }, 10); // 🟢 smoother timing (was 2ms, way too fast)
}

// ==========================
// START GAME BUTTON
// ==========================

startButton.addEventListener("click", () => {
  instructionsScreen.style.display = "none";
  gameScreen.style.display = "block";

  // 🟢 moved interval inside Start button so ramen only fall after starting the game
  fallingInterval = setInterval(createFallingObject, 1000);
});