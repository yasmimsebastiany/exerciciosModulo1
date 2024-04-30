const prompt = require('prompt-sync')();

let numEleitores = parseInt(prompt('Digite o número de eleitores: '));
while (numEleitores <= 0) {
    numEleitores = parseInt(prompt('Digite um número válido de eleitores: '));
    numEleitores = (numEleitores);
}
let votosBrancos = parseInt(prompt('Digite o número de votos em branco: '));
let votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
let votosValidos = parseInt(prompt('Digite o número de votos válidos: '));

let percentualVotosBrancos = (votosBrancos / numEleitores) * 100;
let percentualVotosNulos = (votosNulos / numEleitores) * 100;
let percentualVotosValidos = (votosValidos / numEleitores) * 100;

console.log('Percentual de votos em branco: ' + percentualVotosBrancos + '%');
console.log('Percentual de votos nulos: ' + percentualVotosNulos + '%');
console.log('Percentual de votos válidos: ' + percentualVotosValidos + '%');