let firstName = 'Jason';
let lastName = 'Wang';

function greet(firstName) {  // Shadows firstName declared on line 1
  console.log(firstName);    // John

	let lastName = 'Wong';     // Shadows lastName declared on line 2
	console.log(lastName);     // Wong
}

greet('John');