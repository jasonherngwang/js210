function a() {
  let b = 0;

  // Both functions `c` and `d` close over the same variable `b`.
  const c = () => {
    b += 1;
    return b;
  };

  const d = () => {
    b += 1;
    return b;
  };

  return [c, d];
}

// `a` returns two closures that both close over `b`.
let [e, f] = a();

// Reassignment of a shared variable is reflected in both closures.
console.log(e()); // 1
console.log(f()); // 2
