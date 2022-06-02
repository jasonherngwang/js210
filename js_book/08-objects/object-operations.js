let person = {
  species: 'sapiens',
  planet: 'Earth',
}

let jason = Object.create(person);
jason.name = 'Jason';
jason['age'] = 33;

console.log(jason);

// Values of object's own properties
console.log(Object.values(jason));

// Object's own k-v pairs, as array of arrays
console.log(Object.entries(jason));

// Assign (merge) multiple objects (destructive to first object)
let barista = {
  skill: 'making coffee',
}

// Assign to empty object to prevent mutating the others.
console.log(Object.assign({}, jason, barista));

// Mutates jason
Object.assign(jason, barista)
console.log(jason);

