let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
On line 1, variable `bar` is declared and initialized to the number `1`. This variable has global scope. On lines 2-4 the function `foo()` is declared. On line 6 the function `foo()` is called. Within the function body, on line 3, the local variable `bar` is declared and initialized to the number `2`. The inner scope of a block or function body has access to variables declared in outer scope, due to variable scoping rules. However, that is not relevant to this code because `bar` declared on line 3 is separate from `bar` on line 1. Therefore the variable passed as an argument to `console.log` is `bar` declared on line 1. It will log `1` to the console.
*/

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

/*
In this second example, global variable `bar` is reassigned, and the code logs `2`.
*/