const prompt = require('prompt-sync')();

let n = prompt("Combien d'éléments ?");
let tableau = [];

for (let i = 0; i < n; i++) {
    tableau.push(Number(prompt("Entrez le nombre " + (i + 1) + " :")));
}

let facteur = Number(prompt("Entrez le facteur de multiplication :"));
let resultat = [];
for (let i = 0; i < tableau.length; i++) {
    resultat.push(tableau[i] * facteur);
}

console.log( "Tableau de multiplication" + resultat);