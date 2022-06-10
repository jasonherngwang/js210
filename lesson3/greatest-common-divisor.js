/*
Create a function that computes the Greatest Common Divisor of two positive integers.

Algo - Brute force
- Select smaller of the two number
- Iterate from the smaller number down to 1
  - If divisible by both numbers, return it

Algo - Euclidean algorithm
For 2 numbers, works regardless of order since first operation will just swap the order.
- Replace (a, b) with (b, a % b) until we reach (d, 0).
- Return d

Algo - Euclidean algo with array of numbers as input
- Reduce 
*/

const gcd = (a, b) => {
  for (let num = Math.min(a, b); num >= 1; num -= 1) {
    if (a % num === 0 && b % num === 0) return num;
  }
}

// console.log(gcd(12, 4));
// console.log(gcd(15, 10));
// console.log(gcd(9, 2));

const gcdEuclid = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// console.log(gcdEuclid(12, 4));
// console.log(gcdEuclid(15, 10));
// console.log(gcdEuclid(9, 2));

const gcdEuclidRecursive = (a, b) => {
  // base case
  if (b === 0) return a;
  return gcdEuclidRecursive(b, a % b);
}

// console.log(gcdEuclidRecursive(12, 4));
// console.log(gcdEuclidRecursive(15, 10));
// console.log(gcdEuclidRecursive(9, 2));

const gcdEuclidArray = arr => {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => gcdEuclid(a, b));
}

console.log(gcdEuclidArray([12, 4, 16, 24, 40000000]));
console.log(gcdEuclidArray([6, 24, 60]));
console.log(gcdEuclidArray([42]));
console.log(gcdEuclidArray([]));