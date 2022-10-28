"use strict";

const word = prompt("Inserisci una parola:");
console.log(word);

function stringreverse (word) {
    
    let reverse;
    for (let i = word.length - 1; i>=0; i--) {
        reverse += word[i];
    }
        if (word === reverse){
            return true;
    }
    return reverse;
}

console.log(stringreverse(word));