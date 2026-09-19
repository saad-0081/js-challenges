const prompt = require (' prompt-sync ')()

let lignes = parseInt(prompt(" donner les nomlbre deslignes pour la pyramide ?"));

for (let i = 1; i <= lignes; i++) {
    let espaces = " ".repeat(lignes - i);
    let etoiles = "*".repeat(2 * i - 1);
    console.log(espaces + etoiles);
}



