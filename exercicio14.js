const prompt = require('prompt-sync')();

let num = prompt('Digite um número decimal: ');
let contador = 0
let soma = 0
let media;
while (num != 0) {
    if(!isNaN(num)) {
        soma += parseFloat(num);
        contador++;
    } 
    num = prompt('Digite um número decimal (ou 0 para finalizar): ');
    num = parseFloat(num)
    if(num == 0){
        media = soma / contador;
        console.log('A média aritmética dos números digitados é: ' + media.toFixed(2));
    }
}