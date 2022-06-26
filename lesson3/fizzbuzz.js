/*
Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

Algo
- Iterate from 1 to 100 (inclusive)
  - Initialize empty result string
  - If number divisible by 3, append 'Fizz'
  - If number divisible by 5, append 'Buzz'
  - If empty string (falsey in JS), log number. Else log string.
*/

const fizzbuzz = () => {
  for (let currentNum = 1; currentNum <= 100; currentNum += 1) {
    result = '';
    if (currentNum % 3 === 0) result += 'Fizz';
    if (currentNum % 5 === 0) result += 'Buzz';
    console.log(result || currentNum);
  }
};
fizzbuzz();
