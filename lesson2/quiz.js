// Question 5
var qux5 = 2;
function foo5() {
  var qux5 = 1; // Doesn't affect closure of function `bar`.
  bar5();
}

function bar5() {
  console.log(qux5); // Closure includes `qux` from line 1
}

foo5();  // logs 2


// Question 9
console.log(foo());

function foo() {                    // Gets replaced
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {                  // Gets replaced
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}

// Equivalent code
// function foo() {
//   function bar() {
//     console.log('bar again and again'); // bar again and again
//   }
  
//   console.log(foo); // Can JS find foo? Yes, it could perform a recursive call.
//   bar();            // returns undefined
// }
// console.log(foo()); // undefined