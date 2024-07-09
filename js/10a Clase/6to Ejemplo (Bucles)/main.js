for(let i=0; i<10; i++)
    console.log("I ♥ code")

let j=0;
console.log("ahora con un while!")
while(j<10){
    console.log("I ♥ code");
    j++
}




let array1=["a","b","c","d","e"];

array1.forEach(element => {
    console.log(element)
});


let numero=5;
while(numero>0){
    numero--;
    console.log("se encoge mi numero!")
}
console.log("mi numero se volvió "+numero);


// El programa a analizar entra al do-while la primera vez sin mirar la condicion, 
// donde, como i es igual a 0 tanto en valor como en tipo,
// i incrementa a 1, numero decrece a 0 y se printa numero.
// Luego ve que numero es mas pequeño que 5, asi que vuelve a iterar.
// Esta vez, como i es diferente a 0, va al else, donde incrementará numero.
// Esto sucederá hasta que numero sea igual a 5, es decir, se harán 6 iteraciones,
// donde primero entra al if dejando numero a 0 y luego entra 5 veces a else incrementandolo.




