let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);

// Using for loop
upperNames = [];
for (let index = 0; index < names.length; index += 1) {
  upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}
console.log(upperNames);

// using continue keyword
upperNames = [];
for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}
console.log(upperNames);