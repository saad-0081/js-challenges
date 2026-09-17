const prompt = require('prompt-sync')();
let kmh = parseFloat(prompt("Entrez la vitesse en kilomètres par heure (km/h) :"));

let ms = kmh * 0.27778;

console.log(`${kmh}km/h correspond à ${ms}m/s`);