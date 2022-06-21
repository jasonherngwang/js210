// Shallow copying primitives
let a = [1, 2, 3];
let b = a; // References same array object as `a`
let copy1 = a.slice(); // Shallow copy
let copy2 = [...a]; // Shadow copy, completely separate from `copy1`

a[0] = 42;
copy1[0] = 99;

console.log(a); // [ 42, 2, 3 ]
console.log(b); // [ 42, 2, 3 ]
console.log(copy1); // [ 99, 2, 3 ]
console.log(copy2); // [ 1, 2, 3 ]

// Nested arrays are shared when shallow copying
let nestedArr = [1, [2, 3]];
let nestedCopy = [...nestedArr]; // Copies `1`, shares [2, 3]

nestedArr[0] = 42;
nestedArr[1].push(777);

console.log(nestedArr); // [ 42, [ 2, 3, 777 ] ]
console.log(nestedCopy); // [ 1, [ 2, 3, 777 ] ] (shared obj mutated)

// Shallow copying objects
let obj = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };

Object.assign(obj, obj2, obj3); // Mutates first argument by adding properties of others

console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(obj2); // { b: 2 }
console.log(obj3); // { b: 2 }

// Nested objects
let obj4 = { a: { b: "foo" }, c: ["bar"] };
let copyOfObj = Object.assign({}, obj4);

obj4["a"]["d"] = "baz"; // Mutate shared object
console.log(copyOfObj); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
console.log(obj4); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }

// Deep Copy
let arr = [{ b: "foo" }, ["bar"]];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

deepCopiedArr[1].push("baz");
console.log(deepCopiedArr); // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
console.log(arr); // => [ { b: 'foo' }, [ 'bar' ] ] (not affected by mutation)
