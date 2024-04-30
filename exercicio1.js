const prompt = require('prompt-sync')();

let TempCelsius = prompt('Digite a temperatura em Celsius: ');
let TempFahrenheit = (TempCelsius * 1.8) + 32;
console.log('A temperatura em Fahrenheit é: ' + TempFahrenheit);