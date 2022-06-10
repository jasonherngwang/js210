/*
Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.

Your checkGoldbach function may call the isPrime function you wrote for a previous practice problem.

Algo
- Input number `num`
- Preconditions
  - Log `null` if:
    - `num` is odd
    - `num` < 4
- Iterate from 4 to `num` divided by 2 (floor)
  - If the current number is prime
    - If `num` minus the current number is also prime
      - Log both numbers
*/

function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 === 0)) return false;

  const stop = Math.floor(Math.sqrt(num));
  for (let currentNum = 3; currentNum <= stop; currentNum += 2) {
    if (num % currentNum === 0) return false;
  }
  return true;
}

const checkGoldbach = (expectedSum) => {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }
  for (let n = 2; n <= Math.floor(expectedSum / 2); n += 1) {
    if (isPrime(n)) {
      const difference = expectedSum - n;
      if (isPrime(difference)) {
        console.log(n, difference);
      }
    }
  } 
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(10);
checkGoldbach(12);
checkGoldbach(100);