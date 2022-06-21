let a = 1;

function b() {
  console.log(a);
}

b(); // 1

// Closures are not frozen snapshots. Changes to referenced variables are reflected.
// Order of execution matters. The closure references variable `a`, not the value `1`.
// Therefore, reassigning `a` impacts the closure of function `b`.
a = 2;

b(); // 2
