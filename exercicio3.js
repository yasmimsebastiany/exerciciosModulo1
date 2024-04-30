const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o primeiro número inteiro: '));
let num2 = parseInt(prompt('Digite o segundo número inteiro: '));
let num3 = parseInt(prompt('Digite o terceiro número inteiro: '));
let num4 = parseInt(prompt('Digite o quarto número inteiro: '));

let operacao1 = num1 + 25;
let operacao2 = num2 * 3;
let operacao3 = 0.12 * num3;
let operacao4 = num1 + num2 + num3;

console.log('O resultado da operação 1 é: ' + operacao1);
console.log('O resultado da operação 2 é: ' + operacao2);
console.log('O resultado da operação 3 é: ' + operacao3);
console.log('O resultado da operação 4 é: ' + operacao4);