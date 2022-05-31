// 1. Concat 2+ strings
firstName = 'Jason';
lastName = 'Wang';
fullName = firstName + ' ' + lastName;
console.log(fullName);

// 2. Extract digits from 4936
num = 4936
let thousands, hundreds, tens, ones = [
  num % 10000,
  num % 1000,
  num % 100,
  num % 10,
];
console.log(thousands, hundreds, tens, ones);

/*
3. Data type identification
'true': String
false: Boolean
1.5: Number
2: Number
undefined: Undefined
{ foo: 'bar' }: Object
*/

/*
4. Explain why this code logs '510' instead of 15.
console.log('5' + 10);

Due to implicit type conversion for the `+` arithmetic operator, the numeric value 10 (data type Number) is coerced to the string '10' (data type String).
*/

// 5. Refactor exercise 4 to use explicit coercion
console.log(Number('5') + 10);
console.log(parseInt('5') + 10);

/*
6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

The value of 5 + 10 is 15.
*/
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

/*
7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

No. Due to the absence of an element at index `3`, the expression `foo[3]` will return `undefined` which is logged to the console. The function call `console.log` also returns `undefined`.
*/

// 8. Create an array of pet names
let names = [
  'mittens',
  'paws',
  'socks',
  'purrr',
];
console.log(names);

// 9. Create object `pets` with pet names and animal types
let menagerie = {
  mittens: 'cat',
  paws: 'caracal',
  socks: 'shorthair',
  purrr: 'white tiger',
};
console.log(menagerie);

// 10. What value does the following expression evaluate to?
// `===` compares equality, so this will evaluate to the boolean false.
console.log('foo' === 'Foo');

// 11. What value does the following expression evaluate to?
// Since we are parsing Integers, `parseInt` ignores everything after `.`, so it evaluates to `3`.
console.log(parseInt('3.1415'));

// 12. What value does the following expression evaluate to?
// The boolean true. Strings are compared char-by-char using ASCII position.
console.log('12' < '9');