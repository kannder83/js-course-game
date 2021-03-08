document.addEventListener("keydown", (tecla) => {
  console.log(tecla.code);
  pressKey(tecla.code);
});

function pressKey(press) {
  switch (press) {
    case "KeyA":
      console.log("Ha presionado la tecla a");
  }
  document.getElementById(
    "keypress"
  ).innerHTML = `Ha presionado la tecla: ${press}`;
}
