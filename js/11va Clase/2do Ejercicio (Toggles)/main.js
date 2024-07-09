$().ready(() => {
    $("#roju").click( function(){
        $("p").toggleClass("red");
    });
});

let btn=document.getElementById("blu")
let pe = document.querySelector("p")
btn.onclick = function () {  
    pe.classList.toggle("azul")
}