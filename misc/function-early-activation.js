// This works. foo() was declarated when entering the scope.
foo();
function foo() { console.log('foo'); }
// Equivalent to this order:
function foo() { console.log('foo'); }
foo();

// Doesn't work. Declaration of baz is in a nested block scope.
baz(); // TypeError: baz is not a function
{
  function baz() { console.log('baz'); }
} 

// Only works with function declarations, not function expressions
bar();  // ReferenceError: Cannot access 'bar' before initialization
const bar  = () => console.log('bar');
bar(); // Must access bar() after declaration

// If f() uses g(), we can't call it until after g() is declared.
const f = () => g();
f(); // ReferenceError: Cannot access 'g' before initialization
const g = () => console.log('gee');;
f();