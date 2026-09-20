//const prompt = require('prompt-sync')();

//let nombres = [1, 2, 3, 4, 5];


//for (let i = 0; i < nombres.length; i++) {
    
   // console.log(nombres[i]);
//}

const prompt = require('prompt-sync')();
let n = prompt("Combien d'éléments ?");
let tableau = [];


for (let i = 0; i < n; i++) {
    let mots = prompt("Entrez le nombre " + (i + 1) + " :");
    let chiffre = Number(mots);
    tableau.push(chiffre);
}

let somme = 0;
for (let i = 0; i < tableau.length; i++) {
    somme = somme + tableau[i];
}

console.log("La somme totale est : " + somme);
