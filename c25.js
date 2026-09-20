const prompt = require('prompt-sync')();

let n = prompt("Combien d'éléments ?");
let tableau = [];

for (let i = 0; i < n; i++) {
    let texte = prompt("Entrez le nombre " + (i + 1) + " :");
    tableau.push(Number(texte));
}

let min = tableau[0];

for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
        min = tableau[i];
    }
}

console.log("Le plus petit élément est : " + min);
