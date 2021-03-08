let fps = 10;
let xEscenario = 0;

const selectBtn = document
  .querySelector(".atacar")
  .addEventListener("click", atacar);

function atacar() {
  console.log("Has atacado.");
}

function mueveEscenario() {
  xEscenario++;
  console.log(xEscenario);
  document.getElementById("fps_value").innerHTML = xEscenario;
}

//BUCLE PRINCIPAL
function principal() {
  mueveEscenario();
}

setInterval(principal, 1000 / fps);
