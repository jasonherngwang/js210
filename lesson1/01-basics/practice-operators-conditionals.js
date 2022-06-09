let apples = 3;
let bananas = 5;
if (apples == bananas) console.log("applenanas"); // Nothing

bananas = "3";
// Converts string to number
if (apples == bananas) console.log("applenanas"); // applenanas

// No coercion
if (apples === bananas) console.log("applenanas"); // Nothing

if (apples === bananas) {
  console.log("applenanas");
} else {
  console.log("fruitless"); // fruitless
}

if (apples === bananas) {
  console.log("applenanas");
} else if (apples == bananas) {
  console.log("same number, different types"); // same number, different types
} else {
  console.log("fruitless");
}

if (apples === bananas) {
  console.log("applenanas");
} else {
  if (apples == bananas) {
    console.log("same number, different types"); // same number, different types
  } else {
    console.log("fruitless");
  }
}

apples = 3;
bananas = 3;
let areEqual = apples === bananas;
console.log(areEqual);

apples = 3;
bananas = undefined;
let eitherOr = apples || bananas; // Short-circuit, returning 3
console.log(eitherOr);

apples = 3;
bananas = 1;
eitherOr = apples || bananas; // Short-circuit, returning 3
console.log(eitherOr);
eitherOr = bananas || apples; // Short-circuit, returning 1
console.log(eitherOr);

let lastName = 'Wang';
let familyMessage = (lastName = 'Wang') ? 'Family' : 'Not family';
console.log(familyMessage);