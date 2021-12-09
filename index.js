const progressBar = document.querySelector("#progress");
const doughmakerButton = document.querySelector("#doughmaker");
const numberOfSphere = document.querySelector("#number-sphere");
const flourBag = document.querySelector("#flour-amount");
const velocity = 0.025;
const flourAlert = document.querySelector('#flour-alert')
const tray = document.querySelector('.tray')
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
    const plate = document.createElement("div");
    plate.classList.add('plate');
    tray.append(plate);

    const yellowBall = document.createElement("div");
    yellowBall.classList.add('yellow-dough');
    plate.append(yellowBall);

    formingProgress = 0;
    sphereNumber++;
    numberOfSphere.textContent = sphereNumber;
    flourBag.textContent = flourAmount -= 10;
    
    yellowBall.addEventListener('click', doughClick) 


function doughClick () {
  yellowBall.style.backgroundColor = "black";
  yellowBall.style.width = `${width} - ${22.5} + px`;
  console.log("click");
  // yellowBall.style.height = `${height} - 2.5px}`;
}

  // tray.append(`<div class="yellow-dough"></div>`);

    if (flourAmount === 10) {
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

