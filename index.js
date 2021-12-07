var doughmaker = document.querySelector('#dough-maker');
var i = 0;
let numberOfSpheres = document.querySelector('#number-sphere');
let numberOfClicks = 0;
function move() {
  if (i === 0) {
    i = 1;
    var greenBar = document.querySelector('#green-bar');

    var width = 0;
    var id = setInterval(frame, 40);
    function frame() {
        doughmaker.textContent = "Ulep ciasto";
        greenBar.style.width = "0";
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        numberOfClicks += 1;
        numberOfSpheres.textContent = "Liczba ulepionych ciastowych kul: " + numberOfClicks;
        
      } else {
        width++;
        greenBar.style.width = width + "%";
        doughmaker.textContent = "Zatrzymaj lepienie";
      }      
    }
  }
}

