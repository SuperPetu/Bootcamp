"use strict";
const btn = document.querySelectorAll("button");
const pantalla = document.querySelector("p");
let score = 0;
let currentInput = "0";
let operator = "?";
let punto = false;
let num = true;
let lastChar;
let primero = "?";
let segundo = "";
function calcular(pri, seg, op) {
    if (operator == "?")
        pri = currentInput;
    console.log(pri);
    let fir = parseFloat(pri);
    console.log(fir);
    let sec = parseFloat(seg);
    console.log(sec);
    let res = 0;
    switch (op) {
        case "+":
            res = fir + sec;
            break;
        case "x":
            res = fir * sec;
            break;
        case "-":
            res = fir - sec;
            break;
        case "/":
            res = fir / sec;
            break;
        case "?":
            res = fir;
    }
    res = parseFloat(res.toPrecision(5));
    currentInput = res.toString();
    pantalla.textContent = currentInput;
    operator = "?";
    punto = true;
    primero = currentInput;
    segundo = "";
}
function comprobar(i) {
    return function () {
        switch (i) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                num = true;
                if (currentInput != "0") {
                    currentInput += i;
                    if (operator != "?")
                        segundo += i;
                }
                else
                    currentInput = i;
                pantalla.textContent = currentInput;
                break;
            case "+":
            case "-":
            case "/":
            case "x":
                if (operator == "?") {
                    num = false;
                    operator = i;
                    punto = false;
                    primero = currentInput;
                    currentInput += i;
                    pantalla.textContent = currentInput;
                }
                break;
            case ".":
                if (!punto && num) {
                    punto = true;
                    currentInput += i;
                    pantalla.textContent = currentInput;
                    if (operator != "?")
                        segundo += i;
                }
                break;
            case "RESET":
                operator = "?";
                punto = false;
                currentInput = "0";
                primero = "?";
                segundo = "";
                pantalla.textContent = currentInput;
                break;
            case "=":
                if (operator)
                    calcular(primero, segundo, operator);
                break;
            case "DEL":
                lastChar = currentInput.slice(-1);
                if (lastChar == '.') {
                    punto = false;
                }
                else if (['+', '-', '/', 'x'].includes(lastChar)) {
                    operator = "?";
                    num = true;
                }
                currentInput = currentInput.slice(0, -1);
                lastChar = currentInput.slice(-1);
                if (['+', '-', '/', 'x', "."].includes(lastChar))
                    num = false;
                pantalla.textContent = currentInput;
                break;
        }
    };
}
btn.forEach(btn => {
    const id = btn.innerText;
    btn.addEventListener("click", comprobar(id));
});
