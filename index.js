const progressBar = document.querySelector("#progress");
const doughmakerButton = document.querySelector("#doughmaker");
const numberOfSphere = document.querySelector("#number-sphere");
const flourBag = document.querySelector("#flour-amount");
const velocity = 0.1;
const flourAlert = document.querySelector('#flour-alert');
const tray = document.querySelector('.tray');
const numberOfCookie = document.querySelector('#number-cookie');
const bakeClick = document.querySelector('#bakeclick');
const numberOfCookieOnTray = document.querySelector('#number-cookie-on-tray');
// Preparing application state
let isForming = false;
let formingProgress = 0;
let lastUpdateTime = Date.now();
let sphereNumber = 0;
let cookieNumber = 0;
let flourAmount = 100;
let cookieOnTrayNumber = 0;
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
    
    plate.addEventListener('click', doughClick);

    let currentWidth = 50;
    let currentHeight = 50;

    function doughClick () {
      
      currentWidth -= 5;
      yellowBall.style.width = currentWidth + "px";
      currentHeight -= 5;
      yellowBall.style.height = currentHeight + "px";
      cookieNumber++;
      numberOfCookie.textContent = cookieNumber;  
      console.log("cookie Number" + cookieNumber);
      if (currentWidth == 0) {
        plate.remove();
        sphereNumber--;
        numberOfSphere.textContent = sphereNumber;
        return;
      }
    }

    if (flourAmount === 0) {
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

bakeClick.addEventListener("click", function () {
  if( cookieNumber > 0) { 
  console.log("cookie Number" + cookieNumber); 
  cookieOnTrayNumber++;
  cookieNumber--;
  
  if (cookieOnTrayNumber > 9 || cookieNumber < 0){
    return;
  }
  numberOfCookie.textContent = cookieNumber;
  
  console.log("cookie On Tray Number" + cookieOnTrayNumber);
  numberOfCookieOnTray.textContent = cookieOnTrayNumber; 
  
}

})


