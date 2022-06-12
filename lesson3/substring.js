/*
Write a function that returns a substring of a string based on a starting index and length.

The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.

Algo
Preconditions
- If start is larger than string length - 1, return empty string

Steps
- Normalize start index, if negative
- Convert length to end index, by adding to start
  - If greater than string length - 1, set to string length - 1
  - If negative, return empty string
- Initialize empty result string
- Iterate from start to end index by 1
  - Add char to result string
- Return result string
*/

function substr(string, start, length) {
  let startIndex = start;
  while (startIndex < 0) {
    startIndex += string.length;
  }

  const endIndex = Math.min(startIndex + length - 1, string.length - 1);
  if (endIndex < 0) {
    return '';
  }

  let result = '';
  for (let idx = startIndex; idx <= endIndex; idx += 1) {
    result += string[idx];
  }
  return result;
}

const string = 'hello world';

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""
