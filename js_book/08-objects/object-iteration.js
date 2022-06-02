let person = {
  species: 'sapiens',
  planet: 'Earth',
}

let jason = Object.create(person);
jason.name = 'Jason';
jason['age'] = 33;

console.log(jason);

for (let prop in jason) {
  let value = jason[prop];
  if (jason.hasOwnProperty(prop)) {
    value += ' (Own prop)';
  }
  console.log(value);
}

// Using Object.keys
let personKeys = Object.keys(jason);
console.log(personKeys);
personKeys.forEach(k => console.log(jason[k]));