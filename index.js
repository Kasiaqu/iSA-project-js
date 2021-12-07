// ProgressButton({
//     content: 'Progress Step',
//     cssClass: 'doughprocess',
//     enableProgress: true,
//     isPrimary: true,
//     duration: 4000,
//     begin: (args) => {
//         args.step = 20;
//     }
// }, '#progressstep');

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var greenBar = document.querySelector('#green-bar');
    var doughmaker = document.querySelector('#dough-maker');

    var width = 0;
    var id = setInterval(frame, 40);
    function frame() {
        doughmaker.textContent = "Ulep ciasto";
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        greenBar.style.width = width + "%";
        doughmaker.textContent = "Zatrzymaj lepienie";
      }
    }
  }
}

