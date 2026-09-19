const prompt = require('prompt-sync')();
let n = parseInt(prompt("Entrez un entier positif pour la somme :"));

let  somme= 0;


for (let i = 1; i <= n; i++) {

    somme += i; 
}

console.log(`${n} = ${somme}`);