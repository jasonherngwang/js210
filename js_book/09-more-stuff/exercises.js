// Ex 1
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

/* 
Ex 2
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

    
An error was found in the `hello` function, on line 4, character 15.
The `hello` function was called on line 13, from the global level of the program.
The name `greeting` was not defined in the program.
*/

// Ex 3
console.log(Math.sqrt(37));

// Ex 4
console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));

/*
Ex 5
- Split by delimiter, a space (' ')
- Reverse order of words
- Convert word (string) to its length (number)
- Return array of numbers
*/

function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}
console.log(doSomething("Quick brown fox"));

// Ex 6
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// Ex 7
// Exceptions occur in exceptional circumstances where a program does not know how to proceed with execution. JS will raise an exception that we can manually handle.

// Ex 8: true if NaN, false otherwise
function isNotANumber(num) {
  return num !== num;
}
console.log(isNotANumber(NaN));
console.log(isNotANumber(42));

// Ex 9: true if -0, false if 0 or any other number
function detectNegativeZero(num) {
  return 1 / num === -Infinity;
}
console.log(detectNegativeZero(-0));
console.log(detectNegativeZero(0));
console.log(detectNegativeZero(42));

// Ex 10 - Post-increment and pre-increment operators
let y = "5";
console.log(y++); // Coerce and return number 5. Increment to 6 occurs after return.
console.log(++y); // Increment to 7 first, and return number 7.
