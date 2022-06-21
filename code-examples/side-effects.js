/*
Side effects
- Mutating method `pop()` called on `qux`
- Output to console
*/

let num = 42;
let arr = [1, 2, 3];
let str = "a";

function bar() {
  str += "b";
  return str;
}

function foo(arr) {
  num = 777; // Reassigns value referenced by non-local (outer scope) variable
  arr.push(999); // Mutates object referenced by non-local variable
  let value = arr.pop(); // Mutates passed object
  console.log(`popped ${value} from the array`); // Writes to non-local console
  return bar(); // Calls bar() which has side effects.
}

console.log(foo(arr));
