const prompt = require('prompt-sync')();

let n = prompt("Combien d'éléments ?");
let tableau = [];

for (let i = 0; i < n; i++) {
    tableau.push(Number(prompt("Entrez le nombre " + (i + 1) + " :")));
}

let inverse = [];
for (let i = tableau.length ; i >= 0; i--) {
    inverse.push(tableau[i]);
}

console.log("Tableau inversé : " + inverse);