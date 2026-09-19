//const prompt = require('prompt-sync')();

//let nombres = [1, 2, 3, 4, 5];


//for (let i = 0; i < nombres.length; i++) {
    
   // console.log(nombres[i]);
//}

const prompt = require('prompt-sync')();
let n = prompt("Combien d'éléments ?");
let somme = 0;

for (let i = 0; i < n; i++) {
    let nombre = Number(prompt("Entrez le nombre " + (i + 1) + " :"));
    somme = somme + nombre;
}

console.log("La somme totale est : " + somme)