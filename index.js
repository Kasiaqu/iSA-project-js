// var doughmaker = document.querySelector('#dough-maker');
// var i = 0;
// let numberOfSpheres = document.querySelector('#number-sphere');
// let numberOfClicks = 0;
// function move() {
//   if (i === 0) {
//     i = 1;
//     var greenBar = document.querySelector('#green-bar');

//     var width = 0;
//     var id = setInterval(frame, 40);
//     function frame() {
//         doughmaker.textContent = "Ulep ciasto";
//         greenBar.style.width = "0";
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//         numberOfClicks += 1;
//         numberOfSpheres.textContent = "Liczba ulepionych ciastowych kul: " + numberOfClicks;
        
//       } else {
//         width++;
//         greenBar.style.width = width + "%";
//         doughmaker.textContent = "Zatrzymaj lepienie";
//       }      
//     }
//   }
//   else{
    
//   }

// }






// Finding document elements
let doughMaker = document.querySelector('#dough-maker');
let greenBar = document.querySelector('#green-bar');
let numberOfSpheres = document.querySelector('#number-sphere');
// Preparing application state
let numberOfClicks = 0;
// let greenBar = 0;
let clickOn = false;

// let velocity = 0.0001;
// let acceleration = 0.0009;


// Update screen
function move() {
  if (clickOn === true) {
    // Update distance only if acceleration is on
    // velocity += acceleration * elapsedTime;
    // distance += velocity * elapsedTime;
    // car.style.left = distance + "px";
    // width++;
    greenBar.style.width = "100px";
    if (width >= 100) {
                clearInterval(id);
                numberOfClicks += 1;
                numberOfSpheres.textContent = "Liczba ulepionych ciastowych kul: " + numberOfClicks;
                
              } else {
                width++;
                greenBar.style.width = width + "%";
                doughmaker.textContent = "Zatrzymaj lepienie";
              }      
  }
//   greenBar.style.width = "100px";
  // Automatically schedule next update call when the browser
  // is ready to update the screen (every ~16ms = 60FPS (Frames Per Second))
  requestAnimationFrame(move);
}

// Starting sceen updates
move();

// Adding event listeners
doughMaker.addEventListener("click", function () {
  clickOn = true;
});
// doughMaker.addEventListener("click", function () {
//   clickOn = false;
// });

