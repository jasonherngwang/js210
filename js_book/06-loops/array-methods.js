let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// Anonymous function expression
names.forEach(function(name) {
  console.log(name);
});
// Anon arrow func
names.forEach(name => console.log(name));

// Named function expression
printingFunc = function(name) {
  console.log(name);
}
names.forEach(printingFunc);

// Named arrow function
printingArrowFunc = name => console.log(name);
names.forEach(printingArrowFunc);