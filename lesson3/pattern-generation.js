/*
Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. For example, if nStars is 7, log the following pattern:

You may assume that nStars is greater than 1 and less than 10.

Algo
- Iterate from 1 to nStars, keeping track of the counter (row).
  - Initialize an empty result string
  - Nested iteration from 1 to row, keeping track of the counter (col).
    - Append digits from 1 to `col`
    - Append (nStars - col) asterisks
      - If we have double digits, need to determine length of last row and append additional asterisks to pad it.
  - Log the result string
*/

const generatePattern = (nStars) => {
  let lastRowString = ''
  for (let col = 1; col <= nStars; col += 1) {
    lastRowString += col;
  }
  const width = lastRowString.length
  
  for (let row = 1; row <= nStars; row += 1) {
    let result = '';
    for (let col = 1; col <= row; col += 1) {
      result += String(col);
    }
    result += '*'.repeat(width - result.length);
    console.log(result);
  }
}

generatePattern(7);
generatePattern(11);
generatePattern(15);