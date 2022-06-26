/*
Write a function named isXor that takes two arguments, and returns true if exactly one argument is truthy, false otherwise. Your function should work with the boolean values of true and false, but also any JavaScript values based on their "truthiness".

Algo 1
Check for two conditions
1. (a || b) is true (at least one is true)
2. !(a && b) is true (remove the scenarios where a and b are both truthy or both falsey)

Algo 2
Explicitly check that one operand evalutes to true, and the other to false.

XOR should not short-circuit. Knowing the first operand is not enough because we need to exclude cases where both operands evaluate to the same value.
*/

const isXor = (a, b) => !!((a || b) && !(a && b));

// Explicit checks
const isXor2 = (a, b) => {
  if ((a && !b) || (!a && b)) {
    return true;
  }
  return false;
};

const isXor3 = function (a, b) {
  return !!((a && !b) || (!a && b));
};

testCases = [
  [false, true], // true
  [true, false], // true
  [false, false], // false
  [true, true], // false
  [false, 3], // true
  ['a', undefined], // true
  [null, ''], // false
  ['2', 23], // false
];

for (const pair of testCases) {
  console.log(isXor(...pair));
  console.log(isXor2(...pair));
}
