/* 
Algo: Deconstruct and reconstruct
- Create 3 segments (arrays) containing:
  1. Elements from before the splice happens
  2. New elements to splice in
  3. Elements after the deleted ones
- Overwrite the original array, index-by-index, with the 3 segments.
  - Or delete all elements and build it back up
*/
const splice = function splice(array, start, deleteCount, ...elements) {
  start = Math.min(start, array.length);
  deleteCount = Math.min(deleteCount, array.length - start);

  const firstSegment = array.slice(0, start);
  const lastSegment = array.slice(start + deleteCount);
  const deletedSegment = array.slice(start, start + deleteCount);

  array.length = 0;
  array.push(...firstSegment, ...elements, ...lastSegment);

  return deletedSegment;
};

console.log(splice([1, 2, 3], 1, 2)); // [2, 3]
console.log(splice([1, 2, 3], 1, 3)); // [2, 3]
console.log(splice([1, 2, 3], 1, 0)); // []
console.log(splice([1, 2, 3], 0, 1)); // [1]
console.log(splice([1, 2, 3], 1, 0, "a")); // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, "two")); // [2]
console.log(arr2); // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, "two", "three")); // [2, 3]
console.log(arr3); // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0)); // []
console.log(splice(arr4, 1, 0, "a")); // []
console.log(arr4); // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, "a")); // []
console.log(arr5); // ["a", 1, 2, 3]
