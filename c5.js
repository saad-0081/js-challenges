const prompt = require('prompt-sync')();
let n = parseInt(prompt("Entrez un nombre entier positif :"));
let facteurs = []; 

if (n > 0) {
    
    for (let i = 1; i <= n; i++) {
        
        if (n % i === 0) {
            facteurs.push(i); 
        }
    }
    console.log(`Les facteurs de ${n} sont : ${facteurs.join(", ")}`);
    alert(`Les facteurs de ${n} sont : ${facteurs.join(", ")}`);

} else {
    console.log("Veuillez entrer un nombre supérieur à 0.");
}