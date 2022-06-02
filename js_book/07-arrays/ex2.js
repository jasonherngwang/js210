let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.filter(e => e % 2 === 0).forEach(e => console.log(e));

myArray.forEach(function(e) {
  if (e % 2 === 0) {
    console.log(e);
  }
})