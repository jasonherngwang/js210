/*
Write a function that takes two arguments:

a string to be split
a delimiter character

Logs each element after splitting

Algo
- Initialize accumulator string
- Iterate 0 to (string length - 1)
  - If delimiter is empty string
    - Log current char
  - If current char is delimiter
    - Log accumulated string
    - Reassign accumulator to empty string
  - Else
    - Append char to accumulator
*/

const splitString = (str, delimiter) => {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  let acc = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (delimiter === '') {
      console.log(str[idx]);
    } else if (str[idx] === delimiter) {
      console.log(acc);
      acc = '';
    } else {
      acc += str[idx];
    }
  }
  if (acc.length) console.log(acc);
};

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello', ';');
splitString(';hello;', ';');
splitString('We put comprehension and mastery above all else', ' ');
splitString('We put comprehension and mastery above all else', 'and');