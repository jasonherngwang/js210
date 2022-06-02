function fibonacci(number) {
  // Baseline condition
  if (number < 2) return number;

  return fibonacci(number - 2) + fibonacci(number - 1);
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(20));