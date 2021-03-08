let pocion = 0;
let magia = 0;
let espada = 0;
let arco = 0;
let flecha = 0;

const compra = document
  .querySelector(".compra")
  .addEventListener("click", (alDarClick) => {
    compraElemento(alDarClick.target.value);
  });

function compraElemento(objeto) {
  objetoComprado = parseInt(objeto);
  switch (objetoComprado) {
    case 1:
      console.log("Has comprado una pocion.");
      agregaItem(1, 1);
      writeHtml("pocion");
      break;
    case 2:
      console.log("Has comprado una Magia.");
      agregaItem(2, 1);
      writeHtml("magia");
      break;
    case 3:
      console.log("Has comprado una Espada.");
      agregaItem(3, 1);
      writeHtml("espada");
      break;
    case 4:
      console.log("Has comprado una Arco.");
      agregaItem(4, 1);
      writeHtml("arco");
      break;
    case 5:
      console.log("Has comprado una Flecha.");
      agregaItem(5, 1);
      writeHtml("flecha");
      break;
  }
}

function agregaItem(adicionarObjeto, cantidad) {
  switch (adicionarObjeto) {
    case 1:
      pocion = pocion + cantidad;
      break;
    case 2:
      magia = magia + cantidad;
      break;
    case 3:
      espada = espada + cantidad;
      break;
    case 4:
      arco = arco + cantidad;
      break;
    case 5:
      flecha = flecha + cantidad;
      break;
  }
}

function writeHtml(select) {
  switch (select) {
    case "pocion":
      document.getElementById(select).innerHTML = `Pocion: ${pocion}`;
      break;
    case "magia":
      document.getElementById(select).innerHTML = `Magia: ${magia}`;
      break;
    case "espada":
      document.getElementById(select).innerHTML = `Espada: ${espada}`;
      break;
    case "arco":
      document.getElementById(select).innerHTML = `Arco: ${arco}`;
      break;
    case "flecha":
      document.getElementById(select).innerHTML = `Flecha: ${flecha}`;
      break;
  }
}
