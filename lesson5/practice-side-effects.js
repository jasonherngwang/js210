/*
Side effects
- Mutating method `pop()` called on `qux`
- Output to console
*/

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// Impure. Logging to console is a side effect
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// Pure; always returns undefined
function sum(a, b) {
  a + b;
}

// Pure; output only depends on a and b
function sum(a, b) {
  return a + b;
}

// Impure. Side effect of using system I/O for random number generator
// Return value not consistent even if arguments are.
function sum(a, b) {
  return a + b + Math.random();
}

// Pure; always returns 3.1415
function sum(a, b) {
  return 3.1415;
}
