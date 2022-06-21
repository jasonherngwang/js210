let a = [];

[1, 2, 3].forEach((num) => a.push(num)); // Anonymous function's closure includes outer scope variable `a`.

console.log(a); // [1, 2, 3]
