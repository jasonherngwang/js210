function evenOrOdd(num) {
  // if (typeof(num) != 'number') {
  //   console.log('Invalid input');
  //   return;
  // }
  if (!Number.isInteger(num)) {
    console.log('Not an integer.');
    return;
  }
  console.log(num % 2 == 0 ? 'even' : 'odd');
}

evenOrOdd(2);
evenOrOdd(9);
evenOrOdd('10');