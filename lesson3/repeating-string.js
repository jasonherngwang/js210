/*
Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

Input
- string
- value representing a number

Algo
- Try to convert the number representation into a number
  - if NaN or -1, return undefined
  - if 0, return empty string
- Concatenate string to itself (num - 1) times
- Return concatenated result
*/

function repeat(string, times) {
  let repeatTimes = parseInt(times, 10);
  if (Number.isNaN(repeatTimes) || repeatTimes === -1) {
    return undefined;
  }

  let result = '';
  while (repeatTimes > 0) {
    result += string;
    repeatTimes -= 1;
  }
  return result;
}

console.log(repeat('abc', 3));
console.log(repeat('abc', 1)); // "abc"
console.log(repeat('abc', 2)); // "abcabc"
console.log(repeat('abc', -1)); // undefined
console.log(repeat('abc', 0)); // ""
console.log(repeat('abc', 'a')); // undefined
console.log(repeat('abc', false)); // undefined
console.log(repeat('abc', null)); // undefined
console.log(repeat('abc', '  ')); // undefined
console.log(repeat('abc', Infinity));
