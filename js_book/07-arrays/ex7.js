function sumOfSquares(arr) {
  return arr.reduce((acc, elem) => acc + elem ** 2, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares2(arr) {
  return arr.reduce((acc, elem) => acc + elem ** 2);
}

// Omitting the initial value uses the first element as the initial value.
array = [3, 5, 7];
console.log(sumOfSquares2(array)); // => 77