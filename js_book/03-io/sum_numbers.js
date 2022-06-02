let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('First num:\n'));
let number2 = parseInt(rlSync.question('Second num:\n'));
let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
console.log(`${number1} + ${number2} = ${sum}`);
console.log(`${number1} - ${number2} = ${difference}`);
console.log(`${number1} * ${number2} = ${product}`);