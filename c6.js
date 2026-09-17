const prompt = require('prompt-sync')();
let a = parseFloat(prompt("Entre a :"));
let b = parseFloat(prompt("Entre b :"));
let somme= a+b;
let soustraction=a-b;
let moultiplication=a*b;
let division=a/b;
console.log(`${somme}`);
console.log(`${soustraction}`);
console.log(`${moultiplication}`)
console.log(`${division}`);