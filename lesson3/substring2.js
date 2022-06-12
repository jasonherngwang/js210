/*
This practice problem is similar to the previous one. This time though, both arguments are indices of the provided string. The following rules apply:

- If end is omitted, the end variable inside the function is undefined. Return the substring starting at position start up through (and including) the end of the string.
- If either start or end is less than 0 or NaN, treat it as 0.
- If either start or end is greater than the length of the string, treat it as equal to the string length.
- If start is equal to end, return an empty string.
- If the value of start is greater than end, swap the values of the two, then return the substring as described above.
- If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).

Algo
- If end missing, set to (string length - 1)
- Convert NaN and negative to 0.
- Convert values greater than (string length - 1) to (string length - 1)
- Start === End? Return empty string
- Start > End? Swap
- Start < End?
  - Initialize empty result string
  - Iterate from start to end index, appending each char to the result string
- Return result string
 */

// Normalize to [0, string length)
function normalizeIndex(index, lastIndex) {
  const numberIndex = parseInt(index, 10);
  if (Number.isNaN(numberIndex) || numberIndex < 0) return 0;
  return Math.min(numberIndex, lastIndex);
}

function substring(string, start, end) {
  const lastIndex = string.length;

  let endIndex = end === undefined ? lastIndex : end;

  endIndex = normalizeIndex(endIndex, lastIndex);
  let startIndex = normalizeIndex(start, lastIndex);

  if (startIndex === endIndex) return '';

  if (startIndex > endIndex) {
    [startIndex, endIndex] = [endIndex, startIndex];
  }

  let result = '';
  for (let idx = startIndex; idx < endIndex; idx += 1) {
    result += string[idx];
  }

  return result;
}

const string = 'hello world';

console.log(substring(string, 2, 4)); // "ll"
console.log(substring(string, 4, 2)); // "ll"
console.log(substring(string, 0, -1)); // ""
console.log(substring(string, 2)); // "llo world"
console.log(substring(string, 'a')); // "hello world"
console.log(substring(string, 8, 20)); // "rld"
