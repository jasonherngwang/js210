function containsThree(arr) {
  return arr.filter(num => num === 3).length > 0;
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
console.log(containsThree(numbers1));
console.log(containsThree(numbers2));
console.log(containsThree(numbers3));

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));