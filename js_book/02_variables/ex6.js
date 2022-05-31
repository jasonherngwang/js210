const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
This code will log `'bar'`. The scoping rules for constants are the same as for variables declared using `let`.
*/