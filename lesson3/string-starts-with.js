/*
Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

Precondition
- Return false if substring is longer

Algo
- Iterate through indices of substring.
  - Compare char-by-char with primary string
    - If different, return false from function
- Return true
*/

function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx += 1) {
    if (string[idx] !== searchString[idx]) return false;
  }
  return true;
}

const str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We')); // true
console.log(startsWith(str, 'We put')); // true
console.log(startsWith(str, '')); // true
console.log(startsWith(str, 'put')); // false

const longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString)); // false
