// // 1. Rewrite in classic JS

// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// // Remove concise property initializer
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// // 2. Rewrite in classic JS
// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// // Remove concise methods
// function foo() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// // 3. Rewrite in classic JS
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

// // Remove object destructuring
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let result = foo(1, 2, 3);
// let baz = result.baz;
// let qux = result.qux;
// let bar = result.bar;

// // 4. Rewrite in classic JS
// function foo([one, , three]) {
//   return [three, 5, one];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [bar, qux, baz] = result;

// // Remove array destructuring from parameter and last statement
// function foo(array) {
//   let one = array[0];
//   let three = array[2];
//   return [three, 5, one];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// // 5. Rewrite in classic JS
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array);

// // Remove spread syntax
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// // 6. Rewrite in classic JS
// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// // Remove rest syntax in parameter
// function product() {
//   // let array = [...arguments];
//   let array = Array(arguments);
//   return array.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// // 7. Replace the word HERE in the following code so the program prints the results shown:
// // const HERE = { foo: 42, bar: 3.1415, qux: "abc" };
// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo); // 42
// console.log(rest); // { bar: 3.1415, qux: 'abc' }

// // 8. Rewrite in classic JS
// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: "a", b: "b" },
// };

// // const { first, second, ...rest } = obj;
// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: obj.rest,
// };

// // 9. What is the missing code?
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   // Concise property initializer
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type); // cat
// console.log(age); // 9
// console.log(colors); // [ 'black', 'white' ]

/* 10. Write a function that takes 5 string arguments, and returns an object with 3 properties:

first: the first argument
last: the last argument
middle: the middle 3 arguments as a sorted array
After writing the function, write some code to call the function. The arguments you provide should come from an array. You should create local variables named first, last, and middle from the return value.

*/

function firstMiddleLast(first, mid1, mid2, mid3, last) {
  return {
    first,
    middle: [mid1, mid2, mid3].sort(),
    last,
  };
}

let array = ["The", "dog", "is", "a", "GOODBOYE"];
// Object destructuring
let { first, middle, last } = firstMiddleLast(...array);

console.log(first);
console.log(middle);
console.log(last);
