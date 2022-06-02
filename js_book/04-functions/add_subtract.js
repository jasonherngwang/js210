function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

let sum = add(42, 7);
console.log(sum);

let difference = subtract(42, 7);
console.log(difference);

console.log( times( add(42, 7), subtract(42, 7) ) );