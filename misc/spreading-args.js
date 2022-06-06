function func(x, y) {
  console.log(x);
  console.log(y);
}
const someIterable = ['a', 'b'];
func(...someIterable);
func(...[1, 2, 3]); // Ignores 3
func(...[1]); // Prints undefined for y