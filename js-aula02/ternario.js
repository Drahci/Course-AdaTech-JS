const prompt = require("readline-sync");
// usando estrutura de condição em ternario para simplicar

const idade = 20;
// condição ? expressãoSeVerdadeiro : expressãoSeFalso;
// idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

const mesangem = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mesangem);
