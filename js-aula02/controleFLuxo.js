const prompt = require("readline-sync");

// controle de fluxo e condicionais

const idade = Number(prompt.question("Qual a sua idade? "));

const maiorDIdade = idade >= 18;

// entrando em estrutura condicional if/else
if (maiorDIdade) {
  console.log("Você eh maior de idade! :=)");
} else {
  console.log("Você eh menor de idade! :=(");
}

// colocando 3 condições
const nota1 = 5;
const nota2 = 6;
const somaDNotas = nota1 + nota2;
let mediaDNotas = somaDNotas / 2;

if (mediaDNotas >= 6) {
  console.log("Alunos aprovado!");
} else if (mediaDNotas < 6 && mediaDNotas >= 5) {
  console.log("Aluno pendente de prova de recuperação.");
} else {
  console.log("Aluno reprovado.");
}
