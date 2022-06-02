let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

console.log(myArray.map(function(e) {
  if (e % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}));

evenOdd = e => (e % 2 == 0) ? 'even' : 'odd';
console.log(myArray.map(evenOdd));

let result = []
for (i = 0; i < myArray.length; i += 1) {
  let e = myArray[i];
  if (e % 2 === 0) {
    result.push('even');
  } else {
    result.push('odd');
  } 
}
console.log(result);