function sum(arr) {
  let total = 0;
  for (const elem of arr) {
    total += elem;
  }
  return total;
}
console.log(sum([1, 5, 10]));

function average(arr) {
  return sum(arr) / arr.length;
}
console.log(average([1, 5, 10]));

const temperatures = [60, 65, 70, 80, 100];
console.log(average(temperatures));
