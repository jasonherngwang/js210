// Sparse array with element and non-element properties
let a = [1, 2, , , 5];
a["abc"] = "abc";

console.log(a);
// [ 1, 2, <2 empty items>, 5, abc: 'abc' ]

// Indices of elements and missing elements. Skips non-elements.
for (let i = 0; i < a.length; i += 1) {
  console.log(i, a[i]);
}
// 0 1
// 1 2
// 2 undefined
// 3 undefined
// 4 5

// Indices of non-missing elements, and keys (own and inherited) of non-elements. Skips missing elements.
for (let x in a) {
  console.log(x, a[x]);
}
// 0 1
// 1 2
// 4 5
// abc abc

// Values of elements and missing elements. Skips non-elements.
for (let x of a) {
  console.log(x);
}
// 1
// 2
// undefined
// undefined
// 5

// Doesn't work; entries() returns an Array Iterator
// for (let x in a.entries()) {
//   console.log(x);
// }

// Indices and values of elements and missing elements. Skips non-elements.
for (let x of a.entries()) {
  console.log(x);
}
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, undefined ]
// [ 3, undefined ]
// [ 4, 5 ]

// Don't use this.
// for (let x in Object.entries(a)) {
//   console.log(x);
// }
// 0
// 1
// 2
// 3

// Indices/keys and values of non-missing elements and non-elements. Skips missing elements.
for (let x of Object.entries(a)) {
  console.log(x);
}
// [ '0', 1 ]
// [ '1', 2 ]
// [ '4', 5 ]
// [ 'abc', 'abc' ]

// Indices/keys of non-missing elements and non-elements. Skips missing elements.
for (let x of Object.keys(a)) {
  console.log(x, a[x]);
}
// 0 1
// 1 2
// 4 5
// abc abc

// Values of indices/keys of non-missing elements and non-elements. Skips missing elements.
for (let x of Object.values(a)) {
  console.log(x);
}
// 1
// 2
// 5
// abc

// Indices and value of non-missing elements. Skips missing elements and non-elements.
a.forEach((e, i) => console.log(i, e));
// 1 0
// 2 1
// 5 4
