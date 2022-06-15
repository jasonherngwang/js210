// Order of execution matters
let a = 1;
function x() { console.log(a); } // `a` is in the closure of function `x`.
a = 99

// The statement a = 3 has NOT been executed before this function call.
x(); // 99 (even though `a` is reassigned AFTER function definition)

a = 3;
x(); // 3 

// Closure includes entire scope
function abc() {
  let b = 5;
  function y() { console.log(b, c); }
  // y();        // Cannot access 'c' before initialization
  let c = 42; // Declared AFTER definition of `y`, but still included in closure.
  return y;
}

// At the time of function call, `c` has been initialized.
abc()(); // 5 42