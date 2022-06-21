"use strict";

var name = "Abc";

// Ordinary function as method
const func1 = {
  name: "Jason",
  getName: function () {
    console.log(this); // The object func1
    return this.name;
  },
};

// Shorthand
const func2 = {
  name: "Jason",
  getName() {
    return this.name;
  },
};

// Arrow function as method
const func3 = {
  name: "John",
  getName: () => {
    console.log(this); // {}
    return this.name;
  },
};

// Shorthand
const func4 = {
  name: "John",
  getName: () => this.name,
};

console.log(func1.getName()); // Jason
console.log(func2.getName()); // Jason
console.log(func3.getName()); // undefined
console.log(func4.getName()); // undefined
