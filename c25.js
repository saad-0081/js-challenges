const prompt = require('prompt-sync')();

let n = prompt("Combien d'éléments ?");
let tableau = [];
let min = -Infinity; 

for (let i = 0; i < n; i++) {
    let nombre = Number(prompt("Entrez le nombre " + (i + 1) + " :"));
    if (nombre < min) {
        min = nombre;
    }
}

console.log("Le plus petit élément est : " + min);