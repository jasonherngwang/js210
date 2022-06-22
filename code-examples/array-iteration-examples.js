let arr = [1, 2, 3];

arr.forEach((elem, index) => console.log(index, elem));
// 0 1
// 1 2
// 2 3

console.log(arr.map((e) => e * 2)); // [2, 4, 6]

console.log(arr.filter((e) => e % 2 === 1)); // [ 1, 3 ]

console.log(arr.reduce((acc, elem) => acc + elem, 10)); // 16

console.log(arr.find((e) => e === 1)); // 1
console.log(arr.find((e) => e > 10)); // undefined
