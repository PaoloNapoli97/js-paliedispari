"use strict"

let paridispari = prompt("Segli tra pari e dispari");
let value = false;
const min = 1;
const max = 5;


while( paridispari !== "pari" && paridispari !== "dispari"){
    alert("Devi scegliere pari o dispari");
    paridispari = prompt("Pari o dispari");
}



let player = Number(prompt("inserisci un numero tra 1 e 5"));

while( player < 1 || player > 5){
    alert("Devi inserire un numero compreso tra 1 e 5");
    player = Number(prompt("inserisci un numero compreso tra 1 e 5"));
}

const somma = player + random(min, max); 
console.log(`La somma dei numeri è: ${somma}`);

console.log(`La somma dei numeri è pari? ${isEven(somma)}`);

if (paridispari === "pari" ){
    value = true;
}

if((isEven(somma) == true && value == true) || (isEven(somma) == false && value == false)){
    console.log("il vincitore è il giocatore! Winner Winner Chicken Dinner!")
}
else {
    console.log("Oh no, hai perso.. Ha Ha!")
}

// Funzioni

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(somma) { 
    if (somma % 2 == 0){
        return true;
    }
    return false;
}