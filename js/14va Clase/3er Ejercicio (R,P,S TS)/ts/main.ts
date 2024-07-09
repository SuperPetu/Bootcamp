const btn = document.querySelectorAll("button");
const juego = document.querySelector("main");
const jugadorScore = document.querySelector(".jugador") as HTMLElement;
const robotScore = document.querySelector(".robot") as HTMLElement;
let score: number = 0;
let njugada: number = 0;
let cj:number=0;
let ci:number=0;


function comprobar(i: string) {
  return function () {
    let numia: number;
    let ia: string="";
    let res:string="";
    if ((i == "RNG!")) {
      const numi:number = Math.floor(Math.random() * 5) + 1;
      switch (numi) {
        case 1:
          res = "✌";
          break;
        case 2:
          res = "✊";
          break;
        case 3:
          res = "✋";
          break;
          case 4:
            res = "🤏";
            break;
          case 5:
            res = "🖖";
            break;
      }
    }
    else
        res=i;
    numia = Math.floor(Math.random() * 5) + 1;
    switch (numia) {
      case 1:
        ia = "✌";
        break;
      case 2:
        ia = "✊";
        break;
      case 3:
        ia = "✋";
        break;
        case 4:
            ia = "🤏";
            break;
          case 5:
            ia = "🖖";
            break;
    }
    juego?.insertAdjacentHTML("beforeend", "<br>Ronda " + njugada + ": 🧑" + res + " vs 🤖" + ia);

    if(res==ia)
        juego?.insertAdjacentHTML("beforeend", "<br>Empate!<br>");
    else{
        if(res=="✋"&&ia=="✌"||res=="✊"&&ia=="✋"||res=="🤏"&&ia=="✊"||res=="🖖"&&ia=="🤏"||res=="✌"&&ia=="🖖"||res=="🤏"&&ia=="✌"||res=="✋"&&ia=="🤏"||res=="🖖"&&ia=="✋"||res=="🖖"&&ia=="✋"||res=="✊"&&ia=="🖖"||res=="✌"&&ia=="✊"){
            juego?.insertAdjacentHTML("beforeend", "<br>Punto para el Robot!<br>");
            ci++
            robotScore.textContent = ci.toString();
        }

        else{
            juego?.insertAdjacentHTML("beforeend", "<br>Punto para el Jugador!<br>");
            cj++
            jugadorScore.textContent = cj.toString();

        }
    }
    njugada++;
    if(cj==3){
        juego?.insertAdjacentHTML("beforeend", "<br><br>Ganó el Jugador!");
        btn?.forEach((cosa)=>
            cosa.disabled=true
        );
    }
    if(ci==3){
        juego?.insertAdjacentHTML("beforeend", "<br><br>Ganó el Robot!");
        btn?.forEach((cosa)=>
            cosa.disabled=true
        );
    }

  };
}

btn.forEach((btn) => {
  const id: string = btn.innerText;
  btn.addEventListener("click", comprobar(id));
});
