"use strict";
const btn = document.querySelectorAll("button");
const juego = document.querySelector("main");
const jugadorScore = document.querySelector(".jugador");
const robotScore = document.querySelector(".robot");
let score = 0;
let njugada = 0;
let cj = 0;
let ci = 0;
function comprobar(i) {
    return function () {
        let numia;
        let ia = "";
        let res = "";
        if ((i == "RNG!")) {
            const numi = Math.floor(Math.random() * 5) + 1;
            switch (numi) {
                case 1:
                    res = "✌";
                    break;
                case 2:
                    res = "✊";
                    break;
                case 3:
                    res = "✋";
                    break;
                case 4:
                    res = "🤏";
                    break;
                case 5:
                    res = "🖖";
                    break;
            }
        }
        else
            res = i;
        numia = Math.floor(Math.random() * 5) + 1;
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
            case 4:
                ia = "🤏";
                break;
            case 5:
                ia = "🖖";
                break;
        }
        juego === null || juego === void 0 ? void 0 : juego.insertAdjacentHTML("beforeend", "<br>Ronda " + njugada + ": 🧑" + res + " vs 🤖" + ia);
        if (res == ia)
            juego === null || juego === void 0 ? void 0 : juego.insertAdjacentHTML("beforeend", "<br>Empate!<br>");
        else {
            if (res == "✋" && ia == "✌" || res == "✊" && ia == "✋" || res == "🤏" && ia == "✊" || res == "🖖" && ia == "🤏" || res == "✌" && ia == "🖖" || res == "🤏" && ia == "✌" || res == "✋" && ia == "🤏" || res == "🖖" && ia == "✋" || res == "🖖" && ia == "✋" || res == "✊" && ia == "🖖" || res == "✌" && ia == "✊") {
                juego === null || juego === void 0 ? void 0 : juego.insertAdjacentHTML("beforeend", "<br>Punto para el Robot!<br>");
                ci++;
                robotScore.textContent = ci.toString();
            }
            else {
                juego === null || juego === void 0 ? void 0 : juego.insertAdjacentHTML("beforeend", "<br>Punto para el Jugador!<br>");
                cj++;
                jugadorScore.textContent = cj.toString();
            }
        }
        njugada++;
        if (cj == 3) {
            juego === null || juego === void 0 ? void 0 : juego.insertAdjacentHTML("beforeend", "<br><br>Ganó el Jugador!");
            btn === null || btn === void 0 ? void 0 : btn.forEach((cosa) => cosa.disabled = true);
        }
        if (ci == 3) {
            juego === null || juego === void 0 ? void 0 : juego.insertAdjacentHTML("beforeend", "<br><br>Ganó el Robot!");
            btn === null || btn === void 0 ? void 0 : btn.forEach((cosa) => cosa.disabled = true);
        }
    };
}
btn.forEach((btn) => {
    const id = btn.innerText;
    btn.addEventListener("click", comprobar(id));
});
