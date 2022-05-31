{
  let foo = 'bar';
}

console.log(foo);

// Variable scoping rules indicate that variables declared inside a block using `let` and `const` are not accessible from the outside. Therefore, this code raises a ReferenceError exception indicating that the variable `foo` is not defined.