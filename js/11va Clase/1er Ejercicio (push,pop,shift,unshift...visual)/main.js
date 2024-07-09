let push = document.querySelector("#push")
let unshift = document.querySelector("#unshift")
let insert = document.querySelector("#insert")

let pop = document.querySelector("#pop")
let shift = document.querySelector("#shift")
let remove = document.querySelector("#remove")

let i=0;
const par=document.querySelector("p")
const emote = ["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍"]
const tabla = []
let pos1

push.onclick = () =>{
    tabla.push(emote[i])
    i=(i+1)%13;
    par.innerText="["+tabla+"]";
}

unshift.onclick = () =>{
    tabla.unshift(emote[i])
    i=(i+1)%13;
    par.innerText="["+tabla+"]";
}

insert.onclick = () =>{
    pos1=document.querySelector("#adder").value;
    tabla.splice(pos1,0,emote[i]);
    i=(i+1)%13;
    par.innerText="["+tabla+"]";
}

pop.onclick = () =>{
    tabla.pop()
    par.innerText="["+tabla+"]";
}

shift.onclick = () =>{
    tabla.shift()
    par.innerText="["+tabla+"]";
}

remove.onclick = () =>{
    pos1=document.querySelector("#remover").value;
    tabla.splice(pos1,1);
    par.innerText="["+tabla+"]";
}