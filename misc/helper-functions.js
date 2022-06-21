// ARRAY FUNCTIONS

// Array equality (1st level only, primitives only)
function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  return array1.every((elem, index) => {
    return elem === array2[index];
  });
}

// console.log(arraysEqual([], []));             // true
// console.log(arraysEqual([1, 2], [1, 2]));     // true
// console.log(arraysEqual([1, undefined, null, '', 0], [1, undefined, null, '', 0])); // true
// console.log(arraysEqual([1, 2], [2, 1]));     // false (order matters)
// console.log(arraysEqual([1, 2, 3], [1, 2]));  // false
// console.log(arraysEqual([1, [2]], [1, [2]])); // false (objects are not the same)

// Tally element counts in array (from Ethan)
function tally(array) {
  return array.reduce((counts, element) => {
    counts[element] = counts[element] ? counts[element] + 1 : 1;
    return counts;
  }, {});
}

function tally2(array) {
  let counts = {};
  for (let elem of array) {
    if (counts[elem]) {
      counts[elem] += 1;
    } else {
      counts[elem] = 1;
    }
  }
  return counts;
}

function tally3(array) {
  let counts = {};
  for (let elem of array) {
    counts[elem] = (counts[elem] || 0) + 1;
  }
  return counts;
}

// console.log(tally([1, 1, 2, undefined, null, '', '', 0]))

// Sorting numbers
console.log([1, 5, 3].sort((a, b) => a - b));

// STRINGS

// Find left-of-center index
function centerOf(string) {
  let midIndex = Math.ceil(string.length / 2) - 1;
  if (string.length % 2 === 0) return string.slice(midIndex, midIndex + 2);
  return string[midIndex];
}

// REGEX AND CHARACTER CHECKING

// Check character class
function isLowercaseLetter(char) {
  return char >= "a" && char <= "z";
}
function isUppercaseLetter(char) {
  return char >= "A" && char <= "Z";
}
function isDigit(char) {
  return char >= "0" && char <= "9";
}

// Pass capture group to a replacer function
function reverseWord(word) {
  return [...word].reverse().join("");
}

function reverseWordsRegex(sentence) {
  return sentence.replace(/\b(\w){5,}\b/g, reverseWord); // match is passed to reverseWord
}

// MATH AND NUMBERS

// Normalizing to a range (inclusive of min and max)
function normalize(input, min, max) {
  let normalizedInput = input;
  const difference = max - min;
  while (normalizedInput < min) normalizedInput += difference;
  while (normalizedInput > max) normalizedInput -= difference;
  return normalizedInput;
}

// console.log(normalize(-777, 0, 360));
// console.log(normalize(0, 0, 360));
// console.log(normalize(7777, 0, 360));
// console.log(normalize(7, 0, 360));

// Max or min of array
console.log(Math.max([1, 2, 3]));

// RANGES

// Numbers [ 0, 1, 2, 3, 4 ]
[...Array(5).keys()];
Array.from(Array(5).keys());
Array.from({ length: 5 }, (_, i) => i);
Array(5)
  .fill(1)
  .map((x, y) => x + y);
// Letters
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
);

// Array A-Z or a-z
ASCII_UPPERCASE_A = 65;
ASCII_LOWERCASE_A = 97;
[...Array(26).keys()]
  .map((e, i) => i + ASCII_UPPERCASE_A)
  .map((x) => String.fromCharCode(x)); // Upper
[...Array(26).keys()]
  .map((e, i) => i + ASCII_LOWERCASE_A)
  .map((x) => String.fromCharCode(x)); // Lower

// Hash { 'A': 1 }
// Same as tally, but with not counts, just arbitrary value 1
[...Array(26).keys()]
  .map((e, i) => i + ASCII_UPPERCASE_A)
  .map((x) => String.fromCharCode(x))
  .reduce((hash, char) => {
    hash[char] = 1;
    return hash;
  }, {});

let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
