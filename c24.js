const prompt = require('prompt-sync')();
let n = prompt("Combien d'éléments ?");
let max = -Infinity; 

for (let i = 0; i < n; i++) {

    let nombre = Number(prompt("Entrez le nombre " + (i + 1) + " :"));
    if (nombre > max) {

        max = nombre;
    }
}

console.log("Le plus grand élément est : " + max);