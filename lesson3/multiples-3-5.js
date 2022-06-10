/*
Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

Algo 1
- Iterate from 1 to 100
  - If divisible by 3 and 5, log the number with an '!'
  - Else if divisible by 3 or 5, log the number
  - Else continue to next iteration
*/
function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num}!`);
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(num);
    }
  }
}

multiplesOfThreeAndFive();

// Further Exploration (misunderstood)
// How would you change your function so it takes, as arguments, the range of numbers it should check?
const divisibleBy = (dividend, divisor) => dividend % divisor === 0;

const multiplesOf = (...nums) => {
  for (let num = 1; num <= 100; num += 1) {
    if (nums.every((n) => divisibleBy(num, n))) {
      console.log(`${num}!`);
    } else if (nums.some((n) => divisibleBy(num, n))) {
      console.log(num);
    }
  }
};

multiplesOf(3, 5, 10);
multiplesOf(2, 6, 7);

// Further Exploration (corrent)
function multiplesOfThreeAndFiveRange(min, max) {
  for (let num = min; num <= max; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num}!`);
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(num);
    }
  }
}

multiplesOfThreeAndFiveRange(30, 60);
