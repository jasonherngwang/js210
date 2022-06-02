function getName(prompt) {
  let rlSync = require("readline-sync");
  let name = rlSync.question(prompt);
  return name;
}
let firstName = getName("What's your first name? ");
let lastName = getName("What's your last name? ");
console.log(`${firstName} ${lastName}`);
