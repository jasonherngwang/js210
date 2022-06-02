let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(e => {
  e.forEach(e2 => {
    if (e2 % 2 === 0) {
      console.log(e2);
    }
  })
})