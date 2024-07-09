const pepe = document.querySelector("img");
const btn = document.querySelectorAll("button");
const barras = document.getElementsByClassName("barra");
let score = 0;
let currentWidth;
let newWidth;
let worstWidth = 300;
let worstBar = 4;
let muerto = false;
let hambre = false;

for (let i = 0; i < 4; i++) {
  barras[i].style.width = "150px";
  setInterval(() => bajar(i), 300);
}

function actualizarestado(i, n) {
  if (i >= 300) muerto = true;
  if ((worstWidth > i && worstBar != n) || worstBar == n) {
    worstBar = n;
    worstWidth = i;
  } else {
    i = worstWidth;
  }
  if (i >= 280 || muerto) pepe.src = "./pepe/BOOOOM.jpg";
  else if (i >= 240 && !hambre) pepe.src = "./pepe/algo mas triste.jpg";
  else if (i >= 100 && !hambre) pepe.src = "./pepe/feliiiiz..jpg";
  else if (i >= 60 && !hambre) pepe.src = "./pepe/aburrido.jpg";
  else if (i >= 20 && !hambre) pepe.src = "./pepe/sad.jpg";
  else if (i <= 10 || hambre) {
    hambre = true;
    pepe.src = "./pepe/desquido.jpg";
  }
}

function bajar(i) {
  currentWidth = parseInt(barras[i].style.width) || 0; // Obtener el ancho actual en número, ignora "px"
  newWidth = currentWidth - (4-i); // Sumar 40px
  barras[i].style.width = newWidth + "px"; // Establecer el nuevo ancho
  actualizarestado(newWidth, i);
}

function sumar_barra(index, incremento) {
  let currentWidth = parseInt(barras[index].style.width) || 0;
  let newWidth = currentWidth + incremento;
  barras[index].style.width = newWidth + "px";
  console.log(barras[index].style.width);
  actualizarestado(newWidth, index);
}

function comprobar(i) {
  return function () {
    switch (i) {
      case "🎮":
        sumar_barra(0, 10);
        sumar_barra(1, -5);

        break;

      case "🏐":
        sumar_barra(0, 30);
        sumar_barra(1, 10);
        sumar_barra(2, -15);

        break;

      case "🥊":
        sumar_barra(1, 10);
        sumar_barra(0, -5);

        break;

      case "🏋️‍♂️":
        sumar_barra(1, 30);
        sumar_barra(3, -10);


        break;

      case "🧉":
        sumar_barra(2, 60);
        sumar_barra(3, 10);
        sumar_barra(0, -30);


        break;

      case "🍕":
        sumar_barra(2, 40);
        sumar_barra(3, -10);

        break;

      case "💤":
        sumar_barra(3, 10);


        break;

      case "☕":
        sumar_barra(3, 60);
        sumar_barra(1, -30);

        break;
    }
  };
}

btn.forEach((btn) => {
  const id = btn.innerText;
  btn.addEventListener("click", comprobar(id));
});
