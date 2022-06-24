/*
Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

Algo
- Return empty array if length is 1
- Initialize empty result array
- Iterate from first element to 2nd to last element
  - If next element > current element + 1
    - Initialize a counter variable to current element + 1
    - While counter < next element
    - Add counter to result array
    - Increment counter
*/

function missing(arr) {
  if (arr.length <= 1) return [];
  let result = [];
  for (let index = 0; index < arr.length - 1; index += 1) {
    if (arr[index + 1] > arr[index] + 1) {
      let counter = arr[index] + 1;
      while (counter < arr[index + 1]) {
        result.push(counter);
        counter += 1;
      }
    }
  }
  return result;
}

console.log(missing([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4])); // []
console.log(missing([1, 5])); // [2, 3, 4]
console.log(missing([6])); // []

function missing2(arr) {
  if (arr.length <= 1) return [];
  return Array(arr[arr.length - 1] - arr[0] - 1)
    .fill(arr[0] + 1)
    .map((x, y) => x + y)
    .filter((x) => !arr.includes(x));
}

console.log(missing2([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
console.log(missing2([1, 2, 3, 4])); // []
console.log(missing2([1, 5])); // [2, 3, 4]
console.log(missing2([6])); // []
