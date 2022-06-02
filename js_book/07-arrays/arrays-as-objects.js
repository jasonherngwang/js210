let arr = [1, 2, 3];
console.log(arr);

// Truncate
arr.length = 2;
console.log(arr);

// Expand
arr.length = 5;
console.log(arr);

// Unset values are `undefined`
console.log(arr[4]);
console.log(arr[4] === undefined);

// Replace
arr[3] = 3;
console.log(arr);

// Unset elements treated as missing
arr.forEach(e => console.log(e));
console.log(arr.map(e => e + 1));

// Add properties
arr[-100] = -100;
console.log(arr);

arr['cat'] = 'dog';
console.log(arr);

// Properties DO NOT count toward length, but unset elements DO.
console.log(arr.length);

// View properties. Indices are considered properties. Unset elements are NOT counted.
console.log(Object.keys(arr));

// Unset is not the same as explicity set undefined. undefined are considered keys.
let unsetArr = []
unsetArr.length = 3
console.log(unsetArr.length);
console.log(Object.keys(unsetArr));

let undefArr = [undefined, undefined, undefined]
console.log(undefArr.length);
console.log(Object.keys(undefArr));