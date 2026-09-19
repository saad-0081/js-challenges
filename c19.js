const prompt = require('prompt-sync')();
let base = parseInt(prompt("Entrez la base :"));
let exposant = parseInt(prompt("Entrez l'exposant :"));

if ((base) && (exposant) && exposant >= 0) {
    let resultat = 1;

    for (let i = 0; i < exposant; i++) {
        resultat *= base;
    }

    console.log(${base}^${exposant} = ${resultat});
}
 else {
    console.log(" donnere nombres valides .");
}