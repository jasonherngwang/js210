/* 
Problem 1

Equivalent Code

Creation Phase
-------------------------------
function testScope() {
  let a;
  a = 'inner';
  console.log(a);
}

let a;

Execution Phase
-------------------------------
a = 'outer';

console.log(a);        // 'outer'
testScope();           // 'inner'
console.log(a);        // 'outer'
*/

let a = "outer";

function testScope() {
  let a = "inner"; // Shadows `a`.
  // This `a` is declared w/ block scope, visible in local (function) scope.
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/* 
Problem 2

Equivalent Code

Creation Phase
-------------------------------
function testScope() {
  a = 'inner';
  console.log(a);
}

let a;

Execution Phase
-------------------------------
a = 'outer';         // Assign 'outer' to `a`

console.log(a);
testScope();
console.log(a);
*/

let a = "outer";

function testScope() {
  a = "inner"; // Reassigns `a` in outer scope
  console.log(a);
}

console.log(a); // 'outer'
testScope(); // 'inner'
console.log(a); // 'inner'

// Problem 3
let basket = "empty";

function goShopping() {
  function shop1() {
    basket = "tv"; // Can access any higher-level scope.
  }

  console.log(basket); // 'empty'

  let shop2 = function () {
    basket = "computer";
  };

  const shop3 = () => {
    let basket = "play station"; // Shadows `basket`
    console.log(basket);
  };

  shop1(); // Reassigns `basket` to 'tv'. Returns `undefined`.
  shop2(); // Reassigns `basket` to 'computer'. Returns `undefined`.
  shop3(); // 'play station'

  console.log(basket); // 'computer'
}

goShopping(); // 'empty'
// 'play station'
// 'computer'

// Problem 4
function hello() {
  a = "hi"; // BAD! Declares a variable in global scope.
}

hello();
console.log(a); // 'hi'

// Problem 5
function hello() {
  let a = "hello"; // Declared with block scope. Visible in local (function) scope.
}

hello();
console.log(a); // Can't find `a`. ReferenceError

// Problem 6
console.log(a); // 'undefined'

var a = 1; // Hoisted to top of global scope; references `undefined`

// Problem 7
console.log(a); // ReferenceError. `a` is hoisted but remains uninitialized.

let a = 1;

// Problem 8
console.log(a); // ReferenceError. Initialization of `a` doesn't occur until `hello()` is called.

function hello() {
  // Hoisted to top of global scope
  a = 1;
}
