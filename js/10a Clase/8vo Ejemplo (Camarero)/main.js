//1

const dinner = []; 
//Output: []
//Expected output: ['🍔', '🌭']
dinner.push('🍔', '🌭');
console.log(dinner);



//2
//Output: ['🍔', '🌭']
//Expected output: ['🍔', '🌭', '🍟', '🍟']
dinner.push('🍟','🍟');
console.log(dinner);



//3
//Output: ['🍔', '🌭', '🍟', '🍟']
//Expected output ['🍔', '🌭', '🍟', '🍟', '🧋', '🧋']
dinner[dinner.length]='🧋';
dinner[dinner.length]='🧋';
console.log(dinner);

//4
//Output: ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋', ]
//Expected output ['🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔']
console.log(dinner.reverse());
dinner.reverse();

const dinner2=[];
for(let i=dinner.length; i>0; i--){
    dinner2[dinner.length-i]=dinner[i-1];
}
console.log(dinner2)

let aux;
for(let i=0; i<dinner.length/2; i++){
    aux=dinner[i];
    dinner[i]=dinner[dinner.length-i-1]
    dinner[dinner.length-i-1]=aux;
}
console.log(dinner)

dinner.unshift('🍸')
console.log(dinner)




const ticket01 = ['🍺', '🍺', '🥜']; 
//👨🏻‍🦰 Output: ['🍺', '🍺', '🥜']
const ticket02 = ['🍺', '🥪', '🥙']; 
//👱🏽‍♂️ Output: ['🍺', '🥪', '🥙']

const combinedTicket = []; 
//Output: []
//Expected output ['🍺', '🍺', '🍺', '🥜', '🍺', '🥪', '🥙']

const combinedTicket1 = ticket01.concat(ticket02);
console.log(combinedTicket1)

const combinedTicket2 = [...ticket01, ...ticket02]
console.log(combinedTicket2)

const combinedTicket3=[]
combinedTicket3.push(...ticket01)
combinedTicket3.push(...ticket02)
console.log(combinedTicket3)

let j=0;
for(i=0; i<ticket01.length; i++){
    combinedTicket[j]=ticket01[i];
    j++
}
for(i=0; i<ticket02.length; i++){
    combinedTicket[j]=ticket02[i];
    j++
}
console.log(combinedTicket)

combinedTicket.pop();
combinedTicket.shift();
console.log(combinedTicket)



const shake = ['🥛', '🍓', '🍌'];
// Expected output: 🥛+🍓+🍌
console.log(shake.join('+'));


const tickets = [1, 100000, 21, 30, 4]

const newticket=tickets.sort((a,b)=>a-b)
console.log(newticket)


