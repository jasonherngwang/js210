/*
Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

Requirements
- Only returns counts for characters that have a count of 2 or more
- Ignores case

Algo
- Create empty object to store char counts
- Downcase string
- Split string into Array of chars
- Iterate through chars
  - If char (downcased) exists as key in counts, increment its value
  - Else initialize its value to 1
- Iterate through char counts
  - If value < 2, delete it
- Return the object
*/

function repeatedCharacters(str) {
  charCounts = {};
  lowerStr = str.toLowerCase();
  chars = [...lowerStr];
  for (let char of chars) {
    if (!(char in charCounts)) {
      charCounts[char] = 0;
    }
    charCounts[char] += 1;
  }
  
  repeatedChars = Object.assign({}, charCounts);
  for (let char in repeatedChars) {
    if (repeatedChars[char] < 2) {
      delete repeatedChars[char];
    }
  }
  return repeatedChars;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }