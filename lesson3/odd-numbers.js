/*
Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

Algo 1
- Iterate from 1 to num
- If number is odd, log it

Algo 2
- Iterate from 1 to num
- If number is even, skip the iteration
  - Else, log it

Algo 3
- Initialize a counter
- While counter <= num
  - Log it
  - Add 2 to counter
*/

function logOddNumbers(num) {
  for (let n = 1; n <= num; n += 1) {
    if (n % 2 === 1) console.log(n);
  }
}

logOddNumbers(19);

function logOddNumbers2(num) {
  for (let n = 1; n <= num; n += 1) {
    if (n % 2 === 0) continue;
    console.log(n);
  }
}

logOddNumbers2(19);

function logOddNumbers3(num) {
  let counter = 1;
  while (counter <= num) {
    console.log(counter);
    counter += 2;
  }
}

logOddNumbers3(19);

function logOddNumbers4(num) {
  const range = (start, stop, step) => {
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  };
  return range(1, num, 2);
}
logOddNumbers4(19);
