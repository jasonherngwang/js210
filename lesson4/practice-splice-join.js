const push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
};

/* 
slice
- If end <= start, return empty array
- Initialize empty result array
- Iterate from start to (end - 1)
- Push element to end of result array.
*/
const slice = (arr, startIndex, endIndex) => {
  let result = [];
  for (let index = startIndex; index < endIndex; index += 1) {
    push(result, arr[index]);
  }
  return result;
};

console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [ 1, 2 ]
console.log(slice(["a", "b", "c", "d", "e", "f", "g"], 1, 3)); // [ 'b', 'c' ]

/* 
splice
- Create empty result array
- Iterate from start index to last index
  - If current index is in the range of indices to be removed (from start index to start index + number of value)
    - Add this element to the result array
  - Reassign current index to the element that is (number of values) indices ahead
- Truncate the array
- Return removed elements.
*/
const splice = (arr, startIndex, numValues) => {
  let removedElems = [];
  for (let index = startIndex; index < arr.length; index += 1) {
    if (index < startIndex + numValues) {
      push(removedElems, arr[index]);
    }
    arr[index] = arr[index + numValues];
  }
  arr.length = arr.length - numValues;
  return removedElems;
};
let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5)); // [ 3, 4, 5, 6, 7 ]
console.log(count); // [ 1, 2, 8 ]

/* 
concat
- Create new result array
- Iterate through both array, pushing each element onto the result array.
*/
const concat = (arr1, arr2) => {
  result = [];
  for (let index = 0; index < arr1.length; index += 1) {
    push(result, arr1[index]);
  }
  for (let index = 0; index < arr2.length; index += 1) {
    push(result, arr2[index]);
  }
  return result;
};
console.log(concat([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

/* 
join
- Initialize empty result string
- Iterate from index 0 to array (length - 2)
  - Convert elem to string, and concat to result string
  - Concat separator string
- Concat last array element.
*/
const join = (arr, separator) => {
  result = "";
  for (let index = 0; index < arr.length; index += 1) {
    result += String(arr[index]);

    if (index < arr.length - 1) {
      result += separator;
    }
  }
  return result;
};
console.log(join(["bri", "tru", "wha"], "ck ")); // 'brick truck wha'
console.log(join([1, 2, 3], " and ")); // '1 and 2 and 3'
