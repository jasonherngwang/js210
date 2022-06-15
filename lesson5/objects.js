let person = {
  name: "Jason",
  age: 33,
  "last name": "Wang",
  true: false, // `true` becomes 'true'
  dinner: {
    entree: "lentils",
    drink: "kefir",
  },
  // function expression as property value
  number: function () {
    return 42;
  },
  // compact method syntax
  habit() {
    return "chill";
  },
};

console.log(person.age); // 33
console.log(person["last name"]); // Wang (must use bracket notation)
console.log(person.number); // [Function: number]
console.log(person.habit()); // chill

let meal = "dinner";
console.log(person[meal]); // variable evaluates to value

console.log(person.dinner.drink); // kefir (chained dot notation)

person.city = "L.A."; // New property
console.log(person.city);
person["true"] = true; // Update existing property value
console.log(person.true);

// Keyword delete
delete person.true;
console.log(person);

// Iteration
for (let key in person) {
  console.log(`${key}, ${person[key]}`);
}

const personKeys = Object.keys(person);
for (let i = 0; i < personKeys.length; i += 1) {
  console.log(person[personKeys[i]]);
}

console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, "number", { enumerable: false });
console.log(Object.getOwnPropertyDescriptors(person));
