// Select all containers
const introContainer = document.getElementById('intro');
const containerW = document.getElementById('containerW');
const containerA = document.getElementById('containerA');
const containerS = document.getElementById('containerS');
const containerD = document.getElementById('containerD');

// Keep track of the current container on stage
let currentContainer = introContainer;
let currentKey = 'intro';

// Function to move container off the stage using Tween.js
function moveOffStage(container) {
  new TWEEN.Tween(container.style)
    .to({ transform: 'translateX(150vw)' }, 1000) // Move to the right
    .easing(TWEEN.Easing.Quadratic.Out) // Apply easing
    .start();
}

// Function to move container on the stage using Tween.js
function moveOnStage(container) {
  new TWEEN.Tween(container.style)
    .to({ transform: 'translateX(0)' }, 1000) // Move to the center
    .easing(TWEEN.Easing.Quadratic.Out) // Apply easing
    .start();
}

// Handle keydown events
document.addEventListener('keydown', (event) => {
  if (event.key === 'w' && currentKey !== 'W') {
    moveOffStage(currentContainer);
    currentContainer = containerW;
    currentKey = 'W';
    moveOnStage(currentContainer);
  } else if (event.key === 'a' && currentKey !== 'A') {
    moveOffStage(currentContainer);
    currentContainer = containerA;
    currentKey = 'A';
    moveOnStage(currentContainer);
  } else if (event.key === 's' && currentKey !== 'S') {
    moveOffStage(currentContainer);
    currentContainer = containerS;
    currentKey = 'S';
    moveOnStage(currentContainer);
  } else if (event.key === 'd' && currentKey !== 'D') {
    moveOffStage(currentContainer);
    currentContainer = containerD;
    currentKey = 'D';
    moveOnStage(currentContainer);
  }
});

// Initialize the scene with intro container
moveOnStage(currentContainer);

// Animation loop for Tween.js
function animate() {
  requestAnimationFrame(animate);
  TWEEN.update(); // Update the tween animations
}

animate();
