const prompt = require('prompt-sync')();

let n = prompt("Combien d'éléments ?");
let tableau = [];

for (let i = 0; i < n; i++) {
    let texte = prompt("Entrez le nombre " + (i + 1) + " :");
    tableau.push(Number(texte));
}

let tableauInverse = [];

for (let i = tableau.length ; i >= 0; i = i - 1) {
    tableauInverse.push(tableau[i]);
}

console.log("Tableau inversé : " + tableauInverse);
