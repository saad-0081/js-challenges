<<<<<<< HEAD
const prompt = require (' prompt-sync ')()

let lignes = parseInt(prompt(" donner les nomlbre deslignes pour la pyramide ?"));

for (let i = 1; i <= lignes; i++) {
    let espaces = " ".repeat(lignes - i);
    let etoiles = "*".repeat(2 * i - 1);
    console.log(espaces + etoiles);
}



=======
const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Entrez un nombre pour  sa table :"));

console.log("Table de multiplication de " + nombre + " (inversée) :");

for (let i = 10; i >= 1; i--) {
    let resultat = nombre * i;
    console.log(`${nombre} x ${i} = ${resultat}`);
}
>>>>>>> origin/main
