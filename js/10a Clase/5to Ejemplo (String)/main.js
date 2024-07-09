function aToO(frasecita) {
    for (let i = 0; i < frasecita.length; i++) {
        frasecita=frasecita.replace('a', 'o');  // Devolver la nueva cadena
    }
    return frasecita;  // Devolver la nueva cadena
}
let frasena = "Mi moto alpina derrapante pataleante";
frase = aToO(frasena);  // Asignar la cadena modificada a la variable original
console.log(frase);



function startsAca(frasinha){
    return frasinha.startsWith("aca");
}
frasinha="academia";
console.log(startsAca(frasinha));
frasinha="escuela";
console.log(startsAca(frasinha));




function tripleHola(frase3){
    if(frase3=="Hola"){
        console.log(frase3.repeat(3))
    }
}
tripleHola("Hola")

