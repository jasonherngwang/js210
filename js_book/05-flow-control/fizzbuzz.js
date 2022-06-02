// switch
for (let i = 1; i <= 30; i++) {
  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      console.log('FizzBuzz');
      break;
    case (i % 3 === 0):
      console.log('Fizz');
      break;
    case (i % 5 === 0):
      console.log('Buzz');
      break;
    default:
      console.log(i);
      break;
    }
}

// if
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// if, with accumulator string
for (let i = 1; i <= 30; i++) {
  result = '';
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  console.log(result || i);  // empty string is falsy
}
