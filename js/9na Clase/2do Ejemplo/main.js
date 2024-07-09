const fullName = (name, surname) => {
    return name+" "+surname;
}

console.log(fullName("Gonzalo", "Fernández"))



function conNombre(booleanito){
    console.log(booleanito);
}

conNombre(5>4);

function numeritos(...numbers){
    numbers.forEach(number =>{
        console.log(number);
    })
}

numeritos(1,2,3,4,5);