let user;
let ia;
const btn = document.querySelector("#next");
const juego = document.querySelector("#juego");
let i=0;

let ucount = 0;
let icount = 0;
let njugada = 1;
let pulsado = false;


btn.onclick = () => {
    if(pulsado){
        alert("ya se acabó el juego! refresca la página para otra partida, nene");
        return;
    }
    do {
        user = prompt("cual es tu jugada? (pon uno de estos tres emojis: ✌ ✊ ✋");
    } while (user != "✌" && user != "✊" && user != "✋")

    let numia = Math.floor(Math.random() * 3) + 1;

    switch (numia) {
        case 1:
            ia = "✌";
            break;
        case 2:
            ia = "✊";
            break;
        case 3:
            ia = "✋";
            break;
    }
    juego.insertAdjacentHTML("beforeend", "<br>Ronda " + njugada + ": 🧑" + user + " vs 🤖" + ia + "<br>");
    njugada++;
    if (user == ia) {
        juego.insertAdjacentHTML("beforeend", "Empate!<br><br>");
    }
    else {
        if (
            (user == "✌" && ia == "✋") ||
            (user == "✋" && ia == "✊") ||
            (user == "✊" && ia == "✌")
        ) {
            juego.insertAdjacentHTML("beforeend", "Gana el usuario!<br>");
            ucount++;
        } else {
            juego.insertAdjacentHTML("beforeend","Gana la máquina!<br>");
            icount++;
        }
        if(ucount>=3 || icount>=3){
            pulsado=true;
            juego.insertAdjacentHTML("beforeend","Ya tenemos un ganador!<br>");
            if(ucount==3)
                setInterval(animarH, 500);
            if(icount==3)
                setInterval(animarR, 500);
        }
        juego.insertAdjacentHTML("beforeend","Jugador["+ucount+"]    Máquina["+icount+"]<br><br>");
    }
}
function animarR(){
    const foto = document.getElementById("hwin");
    foto.style.display="block";

    if(i==0){
        foto.src="./carta/baileR1.png";
        i=1;
    }
    else{
        foto.src="./carta/baileR2.png"
        i=0;
    }
}
function animarH(){
    const foto = document.getElementById("hwin");
    foto.style.display="block";

    if(i==0){
        foto.src="./carta/baileH1.png";
        i=1;
    }
    else{
        foto.src="./carta/baileH2.png"
        i=0;
    }
}

