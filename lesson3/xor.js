/*
Write a function named isXor that takes two arguments, and returns true if exactly one argument is truthy, false otherwise. Your function should work with the boolean values of true and false, but also any JavaScript values based on their "truthiness".

Algo
Check for two conditions
1. (a || b) is true (at least one is true)
2. !(a || b) is true (remove the scenarios where a and b are both truthy or both falsey)
*/

const isXor = (a, b) => !!((a || b) && !(a && b));

console.log(isXor(false, true)); // true
console.log(isXor(true, false)); // true
console.log(isXor(false, false)); // false
console.log(isXor(true, true)); // false

console.log(isXor(false, 3)); // true
console.log(isXor('a', undefined)); // true
console.log(isXor(null, '')); // false
console.log(isXor('2', 23)); // false
