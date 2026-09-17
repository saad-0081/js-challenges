const prompt = require('prompt-sync')();
let nomber1 = parseInt(prompt("Enter premiere nombre:"));
let nomber2 = parseInt(prompt("Enter deuxieme nombre:"));
let nomber3 = parseInt(prompt("Enter troisieme nombre:"));
let r = (nomber1*2) +(nomber2*3) +( nomber3*5) / 3;
console.log("le moyenne de trois nombre: " + r);