// Global variable
let greetingMessage = 'Good Morning!';
console.log(greetingMessage);

function greetPeople() {
  // Global variables are accessible everywhere.
  console.log(greetingMessage);
}
greetPeople();

function changeGreetingMessage(newMessage) {
  // We can reassign global variables from anywhere.
  greetingMessage = newMessage;
}
changeGreetingMessage('Goodbye');
greetPeople();


function sayGreeting() {
  // Local variable
  let myMessage = "What's up?";
  console.log(myMessage);
}
sayGreeting();
// ReferenceError; can't access the local variable
// console.log(myMessage);

// Pass argument to function
function anyGreeting(msg) {
  console.log(msg);
}
anyGreeting('Yo dude!');