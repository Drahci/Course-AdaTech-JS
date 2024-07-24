// Operadores booleanos são usados como comparações
const numero1 = "10";
const numero2 = 10;
const numero3 = 15;

console.log(numero1 == numero2); // true
console.log(numero1 === numero2); // false
console.log(numero1 != numero2); // false
console.log(numero1 !== numero2); // true
//  == serve para comparar e === verifica se é estritamente igual
//  != verifica se é diferente e !== verifica se é estritamente igual

console.log("Exemplo com <", numero2 < numero3);

const idade1 = 21;
const idade2 = 32;
console.log("Exemplo com >=", idade1 >= idade2);
console.log("Exemplo com &&", idade1 >= 21 && idade2 >= 32);
// && é conjunção verifica se as duas coisas são true
console.log("Exemplo com ||", idade1 >= 21 || idade2 >= 39);
// || verifica se um ou outra é true
