function getNum(prompt) {
  let rlSync = require("readline-sync");
  let num = parseFloat(rlSync.question(prompt));
  return num;
}

function multiply(x, y) {
  return x * y;
}

let firstNum = getNum("Enter the first number: ");
let secondNum = getNum("Enter the second number: ");
console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);