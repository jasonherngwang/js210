// Ternary expression
let message = true ? 'yes' : 'no';
console.log(message);

// If statement
// SyntaxError: Unexpected token
let message2 = { if (true) {
    'yes'
  } else {
    'no'
  }
}
console.log(message2);