// ==========================
// ELEMENT REFERENCES
// ==========================
const startButton = document.getElementById("start-button");
const instructionsScreen = document.getElementById("instructions");
const gameScreen = document.getElementById("game-screen");
const box = document.getElementById("box");
const scoreDisplay = document.querySelector(".score");
const firstPic = document.querySelector(".firstpic");
const secondPic = document.querySelector(".secondpic");
const thirdPic = document.querySelector(".thirdpic");
const wonGame = document.querySelector(".wonGame");
const lostGame = document.querySelector(".lostGame");
const mainSound = document.querySelector(".mainSound");
const winSound = document.querySelector(".winSound");
const loseSound = document.querySelector(".loseSound");
let speed = 2;
// ==========================
// GAME STATE VARIABLES
// ==========================
let isDragging = false; 
let missedCount = 0;
const maxMisses = 2;
let score = 0;
let fallingInterval;

// ==========================
// BOX MOVEMENT (TOGGLE MODE)
// ==========================

box.addEventListener("click", (e) => {
  e.stopPropagation();
  isDragging = !isDragging; 

  
  if (isDragging) {
    box.style.cursor = "grabbing";
  } else {
    box.style.cursor = "grab";
  }
});

document.addEventListener("click", (e) => {
  if (isDragging && e.target !== box) {
    isDragging = false;
    box.style.cursor = "grab";
  }
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const gameRect = gameScreen.getBoundingClientRect(); 
  const newLeft = e.clientX - gameRect.left - box.clientWidth / 2;

  const boundedLeft = Math.max(
    0,
    Math.min(newLeft, gameScreen.clientWidth - box.clientWidth)
  );
  box.style.left = boundedLeft + "px";
});

// ==========================
// FALLING OBJECTS
// ==========================

function createFallingObject() {
  const object = document.createElement("div");
  object.classList.add("fallingObject");
  object.style.left = `${Math.random() * (gameScreen.clientWidth - 50)}px`; 
  object.style.top = "0px";
  gameScreen.appendChild(object);

  let objectPosition = 0;

  const objectInterval = setInterval(() => {
    objectPosition += speed;
    object.style.top = objectPosition + "px";

    const objectRect = object.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();

    if (
      objectRect.bottom >= boxRect.top &&
      objectRect.left <= boxRect.right &&
      objectRect.right >= boxRect.left
    ) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      object.remove();
      clearInterval(objectInterval);
    }
    if (score === 5) {
      firstPic.remove("img");
      speed = 3;
    }
    if (score === 10) {
      secondPic.remove("img");
      speed = 4;
    }
    if (score === 15) {
      thirdPic.remove("img");
      gameScreen.style.display = "none";
      wonGame.style.display = "block";
      mainSound.pause();
      winSound.play();
    }
    if (objectPosition > gameScreen.clientHeight) {
      missedCount++;
      object.remove();
      clearInterval(objectInterval);
    }
    
    else if (missedCount >= maxMisses) {
      clearInterval(fallingInterval);
      gameScreen.style.display = "none";
      wonGame.style.display = "none";
      lostGame.style.display = "block";
      mainSound.pause();
      loseSound.play();
      loseSound.volume= 0.3
    }
  }, 10);
}

// ==========================
// START GAME BUTTON
// ==========================

startButton.addEventListener("click", () => {
  instructionsScreen.style.display = "none";
  gameScreen.style.display = "block";
  mainSound.play();
  mainSound.volume= 0.2;

  
  fallingInterval = setInterval(createFallingObject, 1000);
});
