// No increment/decrement expression in `for` syntax.
// However there is an increment statement in the console.log statement.
// Outputs 1 2 3 4 5

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

for (;;) {
  console.log('hello');
  break;
}