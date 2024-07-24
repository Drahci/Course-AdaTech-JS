const prompt = require("readline-sync");
// troque a palavra redlinesync para prompt para ficar mais limpo
// e simples, importe com require e coloque a bibilioteca

const idade = prompt.question("Qual a sua idade?");
// para funcionar precisar colocar na frente do prompt um .question

// aprendendo conversão de tipos de dados
const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);
// pronto idade foi transformado de string para number

console.log("O usuario tem", idade, "anos de idade.");
// o node n comsegue ler prompt pq n tem browser
// mas podemos instalar uma biblioteca pelo terminal usando o comando
// npm install readline-sync
console.log("10" - "4" - "3" - 2 + "5");
// saida daqui é 15, pq 10 - 4 = 6 dps 6-3 = 3 dps
// 3-2 = 1 dps 1+"5" vai dar 15
