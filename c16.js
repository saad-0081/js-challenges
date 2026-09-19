<<<<<<< HEAD
const prompt = require('prompt-sync')()
let n = parseInt(prompt("Entrez le nombre pour la table de multiplication :"));

console.log(`Table de multiplication de ${n} :`);


for (let i = 1; i <= 10; i++) {
let resultat = n * i;
    console.log(`${n} * ${i} = ${resultat}`);
}
    
=======
const prompt = require('prompt-sync')();
let nomber1 = parseInt(prompt("Enter premiere nombre:"));
let nomber2 = parseInt(prompt("Enter deuxieme nombre:"));
let nomber3 = parseInt(prompt("Enter troisieme nombre:"));
let moyenne = nomber1+nomber2+nombre3/3
if(moyenne>=16){
  console.log(` ${moyenne} La mention très bien .`);  
}
else if(moyenne>=14 && moyenne<16){
   console.log(` ${moyenne} La mention bien .`);  
}
else if(moyenne>=12 && moyenne<14){
   console.log(` ${moyenne}La mention assez bien .`);  
}
else if(moyenne>=10 && moyenne<12){
   console.log(` ${moyenne} La mention passable .`);  
}
else {
   console.log(` ${moyenne} La mention recale .`);  
}
>>>>>>> origin/main
