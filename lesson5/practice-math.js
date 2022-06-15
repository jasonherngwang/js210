// Conversion between radians and degrees
const radToDeg = (rad) => (rad * 180) / Math.PI;
const degToRad = (deg) => (deg * Math.PI) / 180;

console.log(radToDeg(1));
console.log(degToRad(180));

// absolute value
let deg = -180;
console.log(Math.abs(deg));

// sqrt
console.log(Math.sqrt(16777216));

// exponent
console.log(Math.pow(16, 6));

// rounding
let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a)); // next lower integer
console.log(Math.ceil(b)); // next higher integer
console.log(Math.round(c)); // round up if fraction >= 0.5, else down

/*
Random Number Generator

Input:
- `min`, an integer
- `max`, an integer
Output: A random integer in the range [min, max]

Requirements
- Inclusive of both ends
- If min and max are equal, return that value
- If min > max, swap the values
- Use Math.random which returns a float in the range [0, 1)
  
Algo
- If min and max are equal, return that value
- If min > max, swap the values
- Since Math.random is exclusive of the right side, use Math.floor to round down.
- Calculate the difference between max and min. Add 1 since we will be rounding down
- Generate a random number
- Multiply the difference and the random number. Round down.
- Add the result to the min
- Return this final value
*/

function randomInt(min, max) {
  if (min === max) return min;
  if (min > max) [min, max] = [max, min];

  let randNum = Math.random();
  const difference = max - min;
  randNum *= difference + 1;
  return min + Math.floor(randNum);
}

console.log(randomInt(1, 5));
