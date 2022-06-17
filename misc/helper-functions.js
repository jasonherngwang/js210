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

// console.log(tally([1, 1, 2, undefined, null, '', '', 0]))


// Sorting numbers
console.log([1, 5, 3].sort((a, b) => a - b));


// REGEX AND CHARACTER CHECKING

// Check character class
function isLowercaseLetter(char) { return char >= 'a' && char <= 'z' }
function isUppercaseLetter(char) { return char >= 'A' && char <= 'Z' }
function isDigit(char) { return char >= '0' && char <= '9' }


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