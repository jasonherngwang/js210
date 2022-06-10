/*
Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.

Algo
- Initialize variables:
  - counter, starting at 1
  - max guesses
- While loop
  - Ask for password
  - if correct
    - display success message
    - exit loop
  - if incorrect and this is the last guess
    - display failure message
    - exit loop
  - if incorrect and not the last guess
    - increment counter by 1
*/

const rlSync = require('readline-sync');

const PASSWORD = 'password';
const MAX_GUESSES = 3;
let attempt = 1;

while (true) {
  const password = rlSync.question('What is the password: ');
  if (password === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  } else if (attempt >= MAX_GUESSES) {
    console.log('You have been denied access.');
    break
  } else {
    attempt += 1;
  }
}
