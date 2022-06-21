// Syntax errors are caught BEFORE hoisting. Writing "equivalent code" is not helpful.
// Cannot re-declare variables using `let`.
let counter = 5;
let rate = 3;

function counter(count) {
  // SyntaxError: Identifier 'counter' has already been declared
  // ...
}

console.log("The total value is " + String(counter * rate));

// Equivalent code
// function counter(count) {
//   // ...
// }

// let counter;
// // Uncaught SyntaxError: Identifier 'counter' has already been declared
// let rate;

// counter = 5;
// rate = 3;

// console.log('The total value is ' + String(counter * rate));
