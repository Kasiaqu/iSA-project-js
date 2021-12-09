const progressBar = document.querySelector("#progress");
const doughmakerButton = document.querySelector("#doughmaker");
const numberOfSphere = document.querySelector("#number-sphere");
const flourBag = document.querySelector("#flour-amount");
const velocity = 0.025;
const flourAlert = document.querySelector('#flour-alert')
// Preparing application state
let isForming = false;
let formingProgress = 0;
let lastUpdateTime = Date.now();
let sphereNumber = 0;
let flourAmount = 100;

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
    sphereNumber++;
    numberOfSphere.textContent = sphereNumber;
    flourBag.textContent = flourAmount -= 10;
    if (flourAmount === 80) {
      flourAlert.textContent = "Za mało mąki!!!";
      return;
    }
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
