const progressBar = document.querySelector("#progress");
const doughmakerButton = document.querySelector("#doughmaker");
const numberOfSphere = document.querySelector("#number-sphere");
const velocity = 0.025;

// Preparing application state
let isForming = false;
let formingProgress = 0;
let lastUpdateTime = Date.now();
let number = 0;

// Update screen
function update() {
  const now = Date.now();
  const elapsedTime = now - lastUpdateTime;
  lastUpdateTime = now;

  if (isForming === true) {
    // Update distance only if acceleration is on

    formingProgress += velocity * elapsedTime;
    progressBar.style.width = formingProgress + "%";
    doughmakerButton.textContent = "Zatrzymaj lepienie";
  }
  if (formingProgress >= 100) {
    formingProgress = 0;
    number++;
    numberOfSphere.textContent = number;
  }
  // Automatically schedule next update call when the browser
  // is ready to update the screen (every ~16ms = 60FPS (Frames Per Second))
  requestAnimationFrame(update);
}

// Starting sceen updates
update();

// Adding event listeners
doughmakerButton.addEventListener("click", function () {
  isForming = !isForming;
  doughmakerButton.textContent = "Lep to ciacho ziom";
});
