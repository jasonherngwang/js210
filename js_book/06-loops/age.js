let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));

for (yearsToAdd = 10; yearsToAdd <= 40; yearsToAdd += 10) {
  console.log(`In ${yearsToAdd} years, you will be ${age + yearsToAdd} years old.`)
}