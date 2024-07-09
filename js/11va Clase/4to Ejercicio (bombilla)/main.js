const btn = document.getElementById("boton");
const ogbtn = btn.src;
const bomb = document.getElementById("bomb");
const ogbomb = bomb.src;
const barras = document.getElementById("sliders");

btn.onclick = () => {
    if (btn.src == ogbtn) {
        btn.src = "./fotos/bon.jpg";
        bomb.src = "./fotos/on.jpg";
        barras.style.display="block";
        barras.style.position="fixed"
    } else {
        btn.src = ogbtn;
        bomb.src = ogbomb;
        barras.style.display = "";
    }
};

bomb.onclick = () => {
    if (bomb.src != ogbomb) alert("AUCHHHH!!");
};



document.getElementById("int").addEventListener("input", function () {
    updateSliderValue("int");
});

document.getElementById("tam").addEventListener("input", function () {
    updateSliderValue("tam");
});

document.getElementById("gir").addEventListener("input", function () {
    updateSliderValue("gir");
});


function updateSliderValue(idSlider){
    const slide = document.getElementById(idSlider);
    switch(idSlider){
        case "int":
            
            bomb.style.opacity=(slide.value)/100
            break;

        case "tam":
            bomb.style.height=slide.value+"px"
            break;

        case "gir":
            bomb.style.rotate=slide.value+"deg";
            break;
    }
}