const prompt = require('prompt-sync')();
let kilomètres = parseFloat(prompt("Entrez la distance en kilomètres :"));

let Yards =  kilomètres* 1093.61;

console.log(`${kilomètres}°km correspond à ${Yards}Y`);