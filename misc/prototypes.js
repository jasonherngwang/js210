let human = {
  species: 'sapiens',
}
let jason = {
  __proto__: human,
  name: 'Jason',
}
console.log(jason);
console.log(jason.species);
console.log(jason.age);