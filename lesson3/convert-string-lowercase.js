/*
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations.

Algo

*/

const toLowerCase = (str) => {
  const CONVERSION_OFFSET = 32;

  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    const char = str[idx];
    const charCode = str.charCodeAt(idx);
    if (char >= 'A' && char <= 'Z') {
      result += String.fromCharCode(charCode + CONVERSION_OFFSET);
    } else {
      result += char;
    }
  }
  return result;
};

console.log(toLowerCase('ALPHABET')); // "alphabet"
console.log(toLowerCase('123')); // "123"
console.log(toLowerCase('abcDEF')); // "abcdef"
