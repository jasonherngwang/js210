function factorial(num) {
  let result = num;
  while (num > 1) {
    num -= 1;
    result *= num;
  }
  return result;
}
for (num = 1; num < 10; num += 1) {
  console.log(factorial(num));
}

function factorialRecursive(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}
for (num = 1; num < 10; num += 1) {
  console.log(factorial(num));
}