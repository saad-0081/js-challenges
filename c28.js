
let n = prompt("Combien d'éléments ?");
let tableau1 = [];

for (let i = 0; i < n; i++) {
    let texte = prompt("Entrez le nombre " + (i + 1) + " :");
    tableau1.push(Number(texte));
}

let tableau2 = [];

for (let i = 0; i < tableau1.length; i++) {
    tableau2.push(tableau1[i]);
}

console.log("Tableau original : " + tableau1);
console.log("Tableau copié : " + tableau2);
