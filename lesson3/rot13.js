/*
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
Letter transformations preserve case. A becomes N while a becomes n.
Don't modify characters that are not letters.
Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

Algo
- Initialize rotation quantity (13)
- Initialize empty result string
- Iterate through characters in string.
- Check if character is in the alphabet (upper or lower), using regex
  - If so, rotate it, and add it to the result string.
  - Else, add the character (unchanged) to the results string.
- Return the result string.

Algo: Rotate char
- Find the UTF-16 char code
- Add num of places to the char code
- If lowercase (codes 97-122)
  - If higher than 122
    -
- If uppercase (codes 65-90)

a: 97
z: 122
A: 65
Z: 90
*/

const LOWER_A = 97;
const LOWER_Z = 122;
const UPPER_A = 65;
const UPPER_Z = 90;
const ALPHABET_SIZE = 26;

function rotLetter(letter, places) {
  let code = letter.charCodeAt() + places;
  let codeA;
  let codeZ;
  [codeA, codeZ] = /[a-z]/.test(letter)
    ? [LOWER_A, LOWER_Z]
    : [UPPER_A, UPPER_Z];
  // Normalization. `places` can be a large positive or negative number.
  while (code > codeZ) code -= ALPHABET_SIZE;
  while (code < codeA) code += ALPHABET_SIZE;
  return String.fromCharCode(code);
}

// Trying out PFA
function rotStr(places) {
  return (str) => str.replace(/[a-z]/gi, (letter) => rotLetter(letter, places));
}

// Magic number 13, but I think the purpose of the number is clear
const rot13 = rotStr(13);

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(
  rot13(rot13('Teachers open the door, but you must enter by yourself.'))
);
console.log(rot13('test') === 'grfg');
console.log(rot13('Test') === 'Grfg');
console.log(rot13('Te.st') === 'Gr.fg');
console.log(rot13('Te.st ') === 'Gr.fg ');
console.log(rot13('Abc') === 'Nop');
console.log(rot13('xYz') === 'kLm');
console.log(rot13('EBG13 rknzcyr.') === 'ROT13 example.');
console.log(
  rot13('This is my first ROT13 excercise!') ===
    'Guvf vf zl svefg EBG13 rkprepvfr!'
);
