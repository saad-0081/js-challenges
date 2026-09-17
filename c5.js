const prompt = require('prompt-sync')();
let celsius = parseFloat(prompt("Entrez la température en degrés Celsius :"));

let etat =  (celsius < 0 ? "Solide": celsius < 100 ? "Liquide" : "Gaz");

console.log (` ${celsius} °C, l'eau est à l'état : ${etat}.`);