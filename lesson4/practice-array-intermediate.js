function oddElementsOf(arr) {
  result = [];
  for (let index = 1; index < arr.length; index += 2) {
    if (index % 2 === 1) result.push(arr[index]);
  }
  return result;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // returns [8, 16, 42]

// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

console.log(mirroredArray(digits));

// Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

let array3 = [23, 4, 16, 42, 8, 15];
let result3 = sortDescending(array3); // returns [42, 23, 16, 15, 8, 4]
console.log(result3); // logs    [42, 23, 16, 15, 8, 4]
console.log(array3); // logs    [23, 4, 16, 42, 8, 15]

// Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.
function matrixSums(arr) {
  return arr.map((array) => {
    return array.reduce((a, b) => a + b);
  });
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // returns [15, 60, 12]

// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  let elems = {};
  let result = [];
  for (let elem of arr) {
    if (!elems[elem]) {
      elems[elem] = 1;
      result.push(elem);
    }
  }
  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // returns [1, 2, 4, 3, 5]
