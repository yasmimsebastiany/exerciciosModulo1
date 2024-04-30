const prompt = require('prompt-sync')();

let num = prompt('Digite um número decimal: ');
let peso = prompt('Digite o peso: ');
let media;
let soma = 0;
let somaPeso = 0;

while (num != 0) {
    if(!isNaN(num) && !isNaN(peso)){
        soma += parseFloat(num) * parseFloat(peso);
        somaPeso += parseFloat(peso);
    }
    num = prompt('Digite um número decimal (ou 0 para finalizar): ');
    num = parseFloat(num);
    peso = prompt('Digite o peso (ou 0 para finalizar): ');
    peso = parseFloat(peso);
    if(num == 0){
        media = soma / somaPeso;
        console.log('A média ponderada dos números digitados é: ' + media.toFixed(2))
    } 
}