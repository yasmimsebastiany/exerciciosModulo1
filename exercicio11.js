const prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número inteiro: '));
while (num >= 0) {
    if (num % 2 == 0) {
        console.log('O número é par')
    } else {
        console.log('O número é ímpar')
    }
    num = parseInt(prompt('Digite um número inteiro: '));
    num = (num);
} 