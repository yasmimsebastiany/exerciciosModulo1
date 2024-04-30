const prompt = require('prompt-sync')();

let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');
while (num2 == num1) {
    num2 = prompt('Digite um segundo número diferente do primeiro: ')
    num2 = (num2);
}
if (num1 > num2) {
    console.log(num2 + ' ' + num1);
} else {
    console.log(num1 + ' ' + num2);
}