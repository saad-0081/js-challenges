const prompt = require('prompt-sync')();
let n = parseInt(prompt("Entrez un nombre factorielle :"));

let factorielle = 1;


for (let i = 1; i <= n; i++) {
    factorielle *= i; 
}

console.log(`${n}! = ${factorielle}`);