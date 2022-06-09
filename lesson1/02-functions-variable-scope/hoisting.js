function myFunc() {
  if (true) {
	  var a = 'a'; // Scoped to myFunc, not the while block
		let b = 'b'; // Scoped to the while block
  }
  console.log(a); // prints 'a'
	// console.log(b); // ReferenceError

	if (false) {
		var c = 1;
	}
	console.log(c); // prints 'undefined' (var is hoisted to function level)
}
myFunc()