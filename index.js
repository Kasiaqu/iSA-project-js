const progressBar = document.querySelector("#progress");
const doughmakerButton = document.querySelector("#doughmaker");
const numberOfSphere = document.querySelector("#number-sphere");
const flourBag = document.querySelector("#flour-amount");
const velocity = 0.1;
const flourAlert = document.querySelector('#flour-alert');
const tray = document.querySelector('#tray');
const numberOfCookie = document.querySelector('#number-cookie');
const bakeClick = document.querySelector('#bakeclick');
const numberOfCookieOnTray = document.querySelector('#number-cookie-on-tray');
const cookieAlert = document.querySelector('#cookie-alert')
const fullOvenAlert = document.querySelector("#full-oven-alert")
const oven = document.querySelector("#oven");
const numberOfBakedCookies = document.querySelector("#number-of-baked-cookies");


// Preparing application state
let isForming = false;
let formingProgress = 0;
let lastUpdateTime = Date.now();
let sphereNumber = 0;
let cookieNumber = 0;
let flourAmount = 100;
let cookieOnTrayNumber = 0;
let bakedCookies = 0;

// Update screen
function update() {
  const now = Date.now();
  const elapsedTime = now - lastUpdateTime;
  lastUpdateTime = now;

  if (isForming) {
    // Update distance only if acceleration is on
    if (formingProgress === 0) {
      if (flourAmount === 0) {
        flourAlert.textContent = "Za mało mąki!!!";
        return;
      }
      flourBag.textContent = flourAmount -= 10;
    }
    formingProgress += velocity * elapsedTime;
    progressBar.style.width = formingProgress + "%";
    doughmakerButton.textContent = "Zatrzymaj lepienie";
  }
  if (formingProgress >= 100) {
    createDoughBall();
  }
  // Automatically schedule next update call when the browser
  // is ready to update the screen (every ~16ms = 60FPS (Frames Per Second))
  requestAnimationFrame(update);
}

// Starting sceen updates
update();

function createDoughBall (){  
const plate = document.createElement("div");
plate.classList.add('plate');
tray.append(plate);

const yellowBall = document.createElement("div");
yellowBall.classList.add('yellow-dough');
plate.append(yellowBall);

formingProgress = 0;
sphereNumber++;
numberOfSphere.textContent = sphereNumber;
// flourBag.textContent = flourAmount -= 10;

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
  cookieAlert.textContent = "";
  if (currentWidth == 0) {
    plate.remove();
    sphereNumber--;
    numberOfSphere.textContent = sphereNumber;
    return;
  }
}}
// Adding event listeners
doughmakerButton.addEventListener("click", function () {
  isForming = !isForming;
  doughmakerButton.textContent = "Lep to ciacho ziom";  
});

bakeClick.addEventListener("click", function () {
  if (cookieOnTrayNumber === 9 ) {
    fullOvenAlert.textContent = "Piec jest pełen";
    return;
  }
  if( cookieNumber > 0 && cookieOnTrayNumber < 9) { 
  console.log("cookie Number" + cookieNumber); 
  cookieOnTrayNumber++;
  cookieNumber--;

  numberOfCookie.textContent = cookieNumber;
  
  console.log("cookie On Tray Number" + cookieOnTrayNumber);
  numberOfCookieOnTray.textContent = cookieOnTrayNumber; 
  
  
  
  function letsBake() {
    const cookie = document.createElement("div");
    cookie.classList.add('cookie');
    oven.append(cookie);

    const bakingStartTime = Date.now();
    const id = setInterval(() => { 
    let currentTime = Date.now();
    let durration = currentTime - bakingStartTime 
    if (durration > 3000) {
      cookie.style.backgroundColor = "orange";
    }
    if (durration > 6000) {
      cookie.style.backgroundColor = "brown";
    }
    if (durration > 9000) {
      cookie.style.backgroundColor = "black";
    }
    if (durration > 12000){
      cookie.remove();
      clearInterval(id);
      fullOvenAlert.textContent = "";
      cookieOnTrayNumber--;
      numberOfCookieOnTray.textContent = cookieOnTrayNumber;
    }
    }, 500)
    cookie.addEventListener('click', takingOut);
    
    function takingOut () {
      console.log(cookie.classList.value);

      if (cookie.style.backgroundColor === "brown") {
      clearInterval(id);
      cookie.parentElement.removeChild(cookie);
      cookieOnTrayNumber--;
      numberOfCookieOnTray.textContent = cookieOnTrayNumber;
      fullOvenAlert.textContent = "";
      console.log("przycisk na ciasto");
      
      bakedCookies++;
      numberOfBakedCookies.textContent = bakedCookies;
    } else {
      clearInterval(id);
      cookie.parentElement.removeChild(cookie);
      cookieOnTrayNumber--;
      numberOfCookieOnTray.textContent = cookieOnTrayNumber;
      fullOvenAlert.textContent = "";
    }
  }
}
  letsBake();

  }

  if (cookieNumber < 1) {
    cookieAlert.textContent = "Robiliśmy co w naszej mocy, ale mamy za mało ciastek";
    return;
  }

})

