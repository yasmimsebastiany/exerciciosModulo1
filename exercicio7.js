const prompt = require('prompt-sync')();

let numMacaCompradas = parseInt(prompt('Digite o número de maçãs compradas: '));
while (numMacaCompradas <= 0) {
    numMacaCompradas = parseInt(prompt('Digite um número válido de maçãs compradas: '))
    numMacaCompradas = (numMacaCompradas);
}
if (numMacaCompradas < 12) {
    let valorTotal = numMacaCompradas * 0.30;
    console.log('O valor total de ' + numMacaCompradas + ' maças é de: ' + valorTotal.toFixed(2) + ' reais');
} else {
    let valorTotal = numMacaCompradas * 0.25;
    console.log('O valor total de ' + numMacaCompradas + ' maças é de: ' + valorTotal.toFixed(2) + ' reais');
}