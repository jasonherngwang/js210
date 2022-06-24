// push
function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}
let count = [0, 1, 2];
console.log(push(count, 3)); // 4
console.log(count); // [ 0, 1, 2, 3 ]

// pop
const pop = (arr) => {
  if (array.length === 0) {
    return undefined;
  }

  const poppedElem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return poppedElem;
};

let count2 = [1, 2, 3];
console.log(pop(count2)); // 3
console.log(count2); // [ 1, 2 ]

// unshift
const unshift = (arr, value) => {
  arr.length = arr.length + 1;
  for (let index = arr.length - 2; index >= 0; index -= 1) {
    arr[index + 1] = arr[index];
  }
  arr[0] = value;
  return arr.length;
};

let count3 = [1, 2, 3];
console.log(unshift(count3, 0)); // 4
console.log(count3); // [ 0, 1, 2, 3 ]

// shift
const shift = (arr) => {
  const firstElem = arr[0];
  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1];
  }
  arr.length = arr.length - 1;
  return firstElem;
};

let count4 = [1, 2, 3];
console.log(shift(count4)); // 1
console.log(count4); // [ 2, 3 ]
