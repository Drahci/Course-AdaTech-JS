const prompt = require("readline-sync");
// estrutura condicional 02 é util quando o escopo tem valores especificos como
// aluno || professor || diretor.

// estrutura do switch case
// switch (variavel){
//     apresentar casos
// }

const permissoes = "aluno";

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alterar aulas e exercícios.");
    break;
  case "diretor":
    console.log("Você pode modificar datas eventos.");
    break;
  default: //faz a função do else
    console.log("Você não tem cadastro.");
    break;
}
