'use strict';

// Implicit global variables
a = 1; // ReferenceError: a is not defined

// Leading zeroes interpreted as octals
console.log(01234567); // SyntaxError: Octal literals are not allowed in strict mode.