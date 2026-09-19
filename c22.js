const prompt = require('prompt-sync')();

let nombre = parseInt(prompt("Entrez un nombre à plusieurs chiffres :"));
let nombreInverse = 0;

while (nombre > 0) {
    
    let dernierChiffre = nombre % 10;
    
    nombreInverse = (nombreInverse * 10) + dernierChiffre;
    
    nombre = Math.floor(nombre / 10);
}

console.log("Le nombre inversé est : " + nombreInverse);
