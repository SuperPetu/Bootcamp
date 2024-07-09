




const cartas = document.querySelectorAll(".carta");

function cambiarFoto(i) {
    return function() {
        const card = document.getElementById(i);
        card.src = "./carta/card-front.png";
    };
}
function restaurar(i) {
    return function() {
        const card = document.getElementById(i);
        card.src = "./carta/card-back.png";
    };
}
cartas.forEach(carta => {
    const id = carta.getAttribute("id");
    carta.addEventListener("mouseover", cambiarFoto(id));
    carta.addEventListener("mouseout", restaurar(id));
});




