function a() {
  let b = 0;

  return function () {
    b += 1;
    return b;
  };
}

// `c` and `d` reference separate closures with their own copy of the function and associated variable `b`
let c = a();
let d = a();

console.log(c()); // 1
console.log(c()); // 2
console.log(d()); // 1
console.log(d()); // 2
