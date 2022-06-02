let person = {
  name: 'Jason',
  age: 33,
  hobbies: ['cooking', 'hiking', 'chilling'],
}
console.log(person);

// bracket and dot notation
console.log(person['hobbies']);
console.log(person.hobbies);

let key = 'age';
console.log(person[key]);

// Add k-v pairs
person.height = '5\'9"';
person['gender'] = 'male';
console.log(person);

// delete
delete person.age;
delete person.abc;
console.log(person);

// const
const person2 = {
  name: 'John',
  age: 35,
}

console.log(person2);
person2.age += 5;
console.log(person2);

// freeze
const person3 = Object.freeze({
  name: 'John',
  age: 35,
})

console.log(person3);
person3.age += 5;         // No effect
console.log(person3);