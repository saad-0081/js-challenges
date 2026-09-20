const prompt = require('prompt-sync')();

let n = prompt("Combien d'éléments ?");
let tableau1 = [];

for (let i = 0; i < n; i++) {
    let texte = prompt("Entrez le nombre " + (i + 1) + " :");
    tableau1.push(Number(texte));
}

let facteurTexte = prompt("Entrez le facteur de multiplication :");
let facteur = Number(facteurTexte);

let tableau2 = []; 
for (let i = 0; i < tableau1.length; i++) {
    let calcul = tableau1[i] * facteur;
    tableau2.push(calcul);
}

console.log("Tableau multiplié : " + tableau2);
