
let n = prompt("Combien d'éléments ?");
let original = [];

for (let i = 0; i < n; i++) {
    original.push(Number(prompt("Entrez le nombre " + (i + 1) +":" )));
}

let copie = [];

for (let i = 0; i < original.length; i++) {
    copie.push(original[i]);
}

console.log("Tableau original : " + original);
console.log("Tableau copié : " + copie);