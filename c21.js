
const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Entrez un nombre pour voir sa table :"));

console.log("Table de multiplication de " + nombre + " (inversée) :");

for (let i = 10; i >= 1; i--) {
    let resultat = nombre * i;
    console.log(`${nombre} x ${i} = ${resultat}`);
}

