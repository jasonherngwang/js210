/*
Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

Algo 1
- Iterate from 100 to 0, decrementing by the input number after each iteration
  - If the number is odd, log it

Algo 2
- Find largest multiple less than 100.
- Decrement by the multiple.
- End when result is negative.
*/

// Decrementing by 1
function logMultiples(num) {
  for (let currentNum = 100; currentNum >= num; currentNum -= 1) {
    if (currentNum % num === 0 && currentNum % 2 === 1) {
      console.log(currentNum);
    }
  }
}

logMultiples(17);
logMultiples(21);

// Using while loop
function logMultiples2(num) {
  let result = Math.floor(100 / num) * num;
  while (result >= 0) {
    if (result % 2 === 1) console.log(result);
    result -= num;
  }
}

logMultiples2(17);
logMultiples2(21);

// Using for loop
function logMultiples3(num) {
  const start = Math.floor(100 / num) * num;
  for (let result = start; result >= 0; result -= num) {
    if (result % 2 === 1) console.log(result);
  }
}

logMultiples3(17);
logMultiples3(21);
