// Ex 1
let person = {
  name: "Bob",
  occupation: "web developer",
  hobbies: "painting",
};
console.log(person.name);
console.log(person["name"]);
console.log(person[["name"]]);
console.log(person[[["name"]]]); // this works???
console.log(person[Object.keys(person).filter((e) => e === "name")]);

// Ex 2 - Coercing non-strings to strings
obj1 = {};
obj1[1] = 1;
obj1["1"] = "1"; // overwrites previous
obj1[undefined] = undefined;
obj1["hello world"] = "hello world";
obj1[true] = true;
obj1["true"] = "true"; // overwrites previous
console.log(obj1);

// Ex 3 - Object that acts like an array
let myArray = {
  0: 0,
  1: 1,
  2: 2,
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Ex 4 - Create array containing uppercased keys from obj
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
console.log(
  Object.keys(obj)
    .map((k) => k.toUpperCase())
    .sort()
);

// Ex 5 - Create object using prototype
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj);

/* Ex 6
Which of the following values are primitive values? Which are objects? Which are neither?

"foo" - String, primitive
3.1415 - Number, primitive
[ 'a', 'b', 'c' ] - Array (Object)
false - boolean, primitive
foo - Identifier (could be variable or function name)
function bar() { return "bar"; } - Function (Object)
undefined - Undefined, primitive
{ a: 1, b: 2 } - Object
*/

// Ex 7
myObj.qux = 3;

// Object.keys returns an array of the object's own keys, i.e. 'qux'.
let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

// for..in statement iterates over the object's own keys as well as its prototype's keys.
for (let key in myObj) {
  console.log(key);
}
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// Ex 8
function copyObj(obj, keys) {
  result = {};
  (keys || Object.keys(obj)).forEach((k) => {
    result[k] = obj[k];
  });
  return result;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

// Creating a function to filter Object values
filterObject = (obj, callback) => {
  filtered = Object.keys(obj)
    .filter((key) => callback(obj[key]))
    .reduce((result, key) => (result[key] = obj[key], result), {});
  return filtered;
};
console.log(filterObject(objToCopy, e => e >= 2));

// Ex 9
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);
/* 
argument1 references foo's object. argument1.a reassigns foo.a to 'hi'.
Local var argument2 is reassigned to the string 'hi'. No change is made to qux.
*/
console.log(foo.a);
console.log(qux);

/* 
Ex 10
Primitives: 1, 2, null, 'a', 'b', false
Objects:
array [1, 2, ["a", ["b", false]], null, {}]
array ["a", ["b", false]]
array ["b", false]
object {}
*/
[1, 2, ["a", ["b", false]], null, {}]

// Ex 6
let obj6 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj6.bar[3].xyz = 606;
console.log(obj6);