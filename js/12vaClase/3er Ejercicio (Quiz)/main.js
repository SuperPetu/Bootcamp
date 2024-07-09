const btn = document.querySelectorAll(".resp");
const prev = document.querySelectorAll(".prev");
const post = document.querySelectorAll(".post");

const pantallas = document.querySelectorAll(".pantalla")
let level=0;
let score=0;
let isDisabled=[0,0,0]
function comprobar(i) {
    return function () {
        if (i != 11 && i != "Arquímedes" && i != "drei")
            alert("MAAAAAL")
        else {
            alert("Correcto :D")
            score++;
        }
        const buttons = pantallas[level].querySelectorAll('.resp');

        for (let i = 0; i < 4; i++) {
            buttons[i].disabled = true;
        }
        isDisabled[level]=1;

        if (pantallas[0].style.display != "none") {
            pantallas[0].style.display = "none";
            pantallas[1].style.display = "flex";
            level=1;
        }
        else {
            if (pantallas[1].style.display != "none") {
                pantallas[1].style.display = "none";
                pantallas[2].style.display = "flex";
                level=2;
            }
        }
        if(isDisabled.every(value => value==1)){
            alert("Completaste el test! Tu puntuacion: "+score)
            pantallas[level].style.display = "none";
        }


    };
}

function previous(i) { 
    if (pantallas[2].style.display != "none") {
        pantallas[2].style.display = "none";
        pantallas[1].style.display = "flex";
        level=1;

    }
    else {
        if (pantallas[1].style.display != "none") {
            pantallas[1].style.display = "none";
            pantallas[0].style.display = "flex";
            level=0;

        }
        else {
        }
    }

    
 }


function posterior(i) { 
    if (pantallas[0].style.display != "none") {
        pantallas[0].style.display = "none";
        pantallas[1].style.display = "flex";
        level=1;

    }
    else {
        if (pantallas[1].style.display != "none") {
            pantallas[1].style.display = "none";
            pantallas[2].style.display = "flex";
            level=2;

        }
        else {

        }
    }

 }


btn.forEach(btn => {
    const id = btn.innerText;
    btn.addEventListener("click",comprobar(id, level));
});

prev.forEach(btn => {
    const id = btn.innerText;
    btn.addEventListener("click", ()=> previous(id));
});

post.forEach(btn => {
    const id = btn.innerText;
    btn.addEventListener("click", ()=> posterior(id));
});

