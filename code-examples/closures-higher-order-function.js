// Higher order function returns a function
function a() {
  let b = 1;

  function c() {
    console.log(b, d); // Variables `b` and `d` are in the closure of function `c`.
  }

  let d = 2; // Order doesn't matter as long as `d` is declared before the function is returned.

  return c;
}

let b = 3; // No impact on the closure of function `c`.

// `b = 1` and `d` are not in scope out here, but the function can still access it from its closure.
a()(); // 1 2
