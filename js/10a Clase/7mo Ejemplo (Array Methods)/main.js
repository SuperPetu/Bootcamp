//.1
const arej1=["🍔","🥙","🍣","🍕","🍜","🍱","🍙","🍘","🥑"];
arej1.fill("🍺", arej1.indexOf("🍕")+1);
console.log(arej1)


//.2
arej2=["🍕","🍕","🍍","🍕","🍕"];
console.log(arej2.includes("🍍"))

//3
console.log(arej2.filter((num)=> num!="🍍"));


//4
arej4=["🍓","🍋","🍓","🍋","🍓"];
console.log(arej4.map((num) => {
    if(num=="🍓")
        return "🍄"
    else return num;
}));


//5
arej5=["🌶","🥛","🌶","🥛","🌶","🥛"];

for(i=0; i<arej5.length; i++)
    if(arej5[i]=="🌶")
        arej5.splice(i+1,0,"🥵");
console.log(arej5)


//6
arej6=["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
for(i=0; i<arej6.length-1; i++)
    if(arej6[i]=="🎴" && arej6[i+1]=="🎴")
        arej6.splice(i+1,0,"🃏");
console.log(arej6)

