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
      break;
    case 2:
      console.log("Has comprado una Magia.");
      break;
    case 3:
      console.log("Has comprado una Espada.");
      break;
    case 4:
      console.log("Has comprado una Arco.");
      break;
    case 5:
      console.log("Has comprado una Flecha.");
      break;
  }
}
