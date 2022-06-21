function foo() {
  let foo1 = 42;
  let foo2 = 43;
  function bar() {
    console.log(foo1);
  }

  return bar;
}
foo()();
