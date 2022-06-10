/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.

Algo: indexOf
Time: O(n^2)
- Determine length of substring
- Iterate from index 0 to length of primary string minus length of substring.
  - For each index, iterate from 0 to length of substring
    - Check if the character in the substring is the same as the corresponding character in the primary string.
      - If there is any mismatch, skip the rest of the iteration
      - If the entire substring matches, return the starting index

Algo: lastIndexOf
Same as indexOf, but starting iterating from (primary length - substring length) down to index 0
*/

function indexOf(str, substr) {
  for (let idx = 0; idx <= (str.length - substr.length); idx += 1) {
    let match;
    for (let sub_idx = idx; sub_idx < (idx + substr.length); sub_idx += 1) {
      if (str[sub_idx] !== substr[sub_idx - idx]) {
        match = false;
        break;
      } else {
        match = true;
      }
    }
    if (match) return idx;
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));
console.log(indexOf('defabc defabc', 'abc'));

function lastIndexOf(str, substr) {
  for (let idx = str.length - substr.length; idx >= 0; idx -= 1) {
    let match;
    for (let sub_idx = idx; sub_idx < (idx + substr.length); sub_idx += 1) {
      if (str[sub_idx] !== substr[sub_idx - idx]) {
        match = false;
        break;
      } else {
        match = true;
      }
    }
    if (match) return idx;
  }
  return -1;
}

console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));

// Contrived implementation using indexOf()
function lastIndexOf2(str, substr) {
  const indicesMatched = [];
  for (let idx = 0; idx <= (str.length - substr.length); idx += 1) {
    let match = indexOf(str.slice(idx, idx + substr.length + 1), substr);
    if (match > -1) indicesMatched.push(idx + match);
  }
  if (indicesMatched.length === 0) return -1;
  return indicesMatched.pop();
}
console.log(lastIndexOf2('Some strings', 's'));
console.log(lastIndexOf2('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf2('Blue Whale, Killer Whale', 'all'));