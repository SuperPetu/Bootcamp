const cartas = document.querySelectorAll(".carta");
let shrinkInterval, expandInterval;

function cambiarFoto(i) {
    return function() {
        const card = document.getElementById(i);
        let width = card.offsetWidth; 

        const isFront = card.src.includes("card-front.png");

        shrinkInterval = setInterval(function() {
            if (width <= 0) {
                clearInterval(shrinkInterval);

                card.src = isFront ? "./carta/card-back.png" : "./carta/card-front.png";


                expandInterval = setInterval(function() {
                    if (width >= 200) {
                        clearInterval(expandInterval);
                    } else {
                        width+=4; 
                        card.style.width = width + "px"; 
                    }
                }, 1);
            } else {
                width-=4; 
                card.style.width = width + "px"; 
            }
        }, 1); 
    };
}

cartas.forEach(carta => {
    const id = carta.getAttribute("id");
    carta.addEventListener("click", cambiarFoto(id));
});
