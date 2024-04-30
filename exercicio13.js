const prompt = require('prompt-sync')();

let cont = 5;
let inicial = 1
while (inicial <= cont) {
    let N = parseInt(prompt('Digite um número inteiro:'));
    for (let i = 1 ; i <= N; i++) {
        tabuada = i * N;
        console.log(i + ' x ' + N + ' = ' + tabuada);
    }
    inicial++;
}