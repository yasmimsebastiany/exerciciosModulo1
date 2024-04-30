const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt('Digite o primeiro lado do triângulo: '));
let lado2 = parseInt(prompt('Digite o segundo lado do triângulo: '));
let lado3 = parseInt(prompt('Digite o terceiro lado do triângulo: '));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        if (lado1 == lado2 && lado2 == lado3){
            console.log('O triângulo é equilátero')
        } else {
            console.log('O triângulo é isósceles')
        }
    } else {
        console.log('O triângulo é escaleno')
    }
} else {
    console.log('Os valores não formam um triângulo')
} 