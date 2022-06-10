/*
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

Algo
- While first index is a space
  - Reassign variable to itself, but from index 1 to its (length - 1)
- While last index is a space
  - Reassign variable to itself, but from index 0 to its (length - 2)
*/

function trim(str) {
  let startIndex = 0;
  let endIndex = str.length - 1;
  while (str[startIndex] === ' ') {
    startIndex += 1;
  }
  while (str[endIndex] === ' ') {
    endIndex -= 1;
  }
  let result = '';
  for(let idx = startIndex; idx <= endIndex; idx += 1){
    result += str[idx];
  }
  return result;
}

console.log(trim('     abc  '));
console.log(trim('abc    '));
console.log(trim(' ab c '));
console.log(trim(' a   b c   '));
console.log(trim('     '));
console.log(trim(''));