console.log("Hello World!");
var nomeDProfessor = "Richard Ricciardi O. Biondo";
var idade = 21;
var altura = 1.77;

console.log(nomeDProfessor, idade, altura);
console.log(typeof idade);
// typeof verifica o tipo da variavel

var curso = "Javascript",
  empresa = "AdaTech";
console.log(curso, empresa);
// também é possivel criar mais de uma variavel
// na mesma linha e declarr elas

// diferença de var e let
// var: Tem escopo de função. As variáveis declaradas com var são limitadas ao escopo da função mais próxima.
// let: Tem escopo de bloco. As variáveis declaradas com let são limitadas ao bloco onde foram declaradas (por exemplo, dentro de um if, for, ou {}).

if (true) {
  var ç = 10;
}
//   console.log(x); 10 (x está disponível fora do bloco)
if (true) {
  let w = 20;
}
//   console.log(y); ReferenceError: y is not defined (y não está disponível fora do bloco)

// trabalhando com operadores matematicos em variaveis/constantes
const nota1 = 10;
const nota2 = 8;

const somaDNotas = nota1 + nota2;
let mediaDNotas = somaDNotas / 2;

console.log("Soma das notas =", somaDNotas);
console.log("Media das notas =", mediaDNotas);

// como calcular raiz quadrada? usando a biblioteca Math
const numero = 16;
console.log("Raiz quadrada de 16 é =", Math.sqrt(numero));
