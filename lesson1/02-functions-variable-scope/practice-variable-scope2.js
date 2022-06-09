// Problem 1
function say() {
  if (false) {
    var a = 'hello from inside a block'; // `var` is function scoped here
  }                                      // Declaration is hoisted to top of function `say()`

  console.log(a);                        // undefined. Only declaration is hoisted, not assignment
}

say();

// Problem 2
function say2() {
  if (false) {
    let a = 'hello from inside a block'; // `let` is block scoped
  }

  // console.log(a);                        // ReferenceError. Outer scope cannot access inner scope.
}

say2();

// Problem 3
// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';  
//   }
// }

// hello();
// console.log(a);

// Equivalent code
function hello() {
  var a;                   // Hoisted to top of function
  a = 'hello';             // Reassignment
  console.log(a);          // 'hello'

  if (false) {             // Does not execute
    a = 'hello again';  
  }
}

hello();
// console.log(a);            // ReferenceError. Instead if initializing a global variable,
                           // `a = 'hello'` reassigned `a`

// Problem 4
function hello2() {
  a = 'hello';              // Initialize global variable `a`
  console.log(a);           // 'hello'

  if (false) {
    let a = 'hello again';  // Hoisted to top of `if` statement's block. No real change.
  }
}

hello2();
console.log(a);             // 'hello'

// Problem 5
var a5 = 'hello5';

for (var index = 0; index < 5; index += 1) { // Hoisted to top of global scope
  var a5 = index;                            // Re-declares and assigns `a5` to `index`
}

console.log(a5);                             // 4

// Equivalent code
// var a5;
// var index;
// var a5;        // Hoisted from inside the `for` loop. Has no effect

// a5 = 'hello5'; // Assignment

// for (index = 0; index < 5; index += 1) { // `index` is reassigned
//   a5 = index;  // Reassignment
// }

// console.log(a5);

// Problem 6
let a6 = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a6 = index;   // Shadows `a6` from first line. Doesn't get hoisted beyond `for` loop's block.
}

console.log(a6);    // 'hello

// Problem 7
let a7 = 1;

function foo() {
  a7 = 2;
  let bar = function() { // Hoisted to top of function `foo`
    a7 = 3;
    return 4;
  };

  return bar();
}

console.log(foo());  // 4
console.log(a7);     // 3

// Equivalent code
// function foo() {
//   let bar = function() {
//     a7 = 3;                // 3) Reassign a7 to 3
//     return 4;
//   };
//   a7 = 2;                  // 2) Reassign a7 to 2

//   return bar();
// }

// let a7;

// a7 = 1;                    // 1) Initialize a7

// console.log(foo());
// console.log(a7);


// Problem 8
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);

// Equivalent code
// function checkScope() {
//   var a;                        // This `var` variable is function scoped
//   a = 'local';                  // 2) Reassign `a`
//   const nested = function() {
//     a = 'nested';               // 3) Reassign `a`
//     let superNested = () => {
//       a = 'superNested';        // 4) Reassign `a`
//       return a;
//     };
    
//     return superNested();
//   };
  
//   return nested();
// }

// var a;

// a = 'global';                   // 1) Initialize `a`

// console.log(checkScope());      // 'superNested'
// console.log(a);                 // 'global'


// Problem 9
let a9 = 'outer';
let b9 = 'outer';

console.log(a9);
console.log(b9);
setScope(a9);
console.log(a9);
console.log(b9);

function setScope(foo) {
  foo = 'inner';
  b9 = 'inner';
}

// Equivalent code
// function setScope(foo) {
//   foo = 'inner'; // Reassigns local variable foo, not a9 in outer scope
//   b9 = 'inner';  // Reassigns b9 in outer scope
// }

// let a9;
// let b9;

// a9 = 'outer';
// b9 = 'outer';

// console.log(a9); // 'outer'
// console.log(b9); // 'outer'
// setScope(a9);
// console.log(a9); // 'outer'
// console.log(b9); // 'inner'


// Problem 10
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;   // Shadows `increment` in outer scope
}

console.log(total);     // 50
incrementBy(10);
console.log(total);     // 60
console.log(increment); // 15


// Problem 11
let a11 = 'outer';

console.log(a11);
setScope11();
console.log(a11);

var setScope11 = function () {
  a11 = 'inner';
};

// Equivalent code
// var setScope11;   // Only the variable declaration, not the entire function, is hoisted.
// let a11;

// a11 = 'outer';

// console.log(a11); // 'outer'
// setScope11();     // Not a function. At this point setScope11 is `undefined`.
// console.log(a11);

// setScope11 = function () {
//   a11 = 'inner';
// };