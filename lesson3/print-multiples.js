/*
Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

Algo
- Iterate from 100 to 0, decrementing by the input number after each iteration
  - If the number is odd, log it
 */

function logMultiples(num) {
  for (let currentNum = 100; currentNum >= num; currentNum -= 1) {
    if (currentNum % num === 0 && currentNum % 2 === 1) {
      console.log(currentNum);
    }
  }
}
logMultiples(17);
logMultiples(21);
