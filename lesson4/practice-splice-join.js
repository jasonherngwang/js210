const push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
};

const slice = (arr, startIndex, endIndex) => {
  let result = [];
  for (let index = startIndex; index < endIndex; index += 1) {
    push(result, arr[index]);
  }
  return result;
};

console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [ 1, 2 ]
console.log(slice(["a", "b", "c", "d", "e", "f", "g"], 1, 3)); // [ 'b', 'c' ]

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

const join = (arr, separator) => {
  result = "";
  for (let index = 0; index < arr.length - 1; index += 1) {
    result += String(arr[index]);

    if (index < array.length - 1) {
      result += separator;
    }
  }
  return result;
};
console.log(join(["bri", "tru", "wha"], "ck ")); // 'brick truck wha'
console.log(join([1, 2, 3], " and ")); // '1 and 2 and 3'
