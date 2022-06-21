// Closure includes entire scope
function abc() {
  let b = 5;
  function y() {
    console.log(b, c);
  }
  // y();        // Cannot access 'c' before initialization
  let c = 42; // Declared AFTER definition of `y`, but still included in closure.
  return y;
}

// At the time of function call, `c` has been initialized.
abc()(); // 5 42
