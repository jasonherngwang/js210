let a = [1, 2, 3, 4, 5];

console.log(a.includes(4));
console.log(a.includes(40));

let letters = ["e", "c", "h", "b", "d", "a"]
console.log(letters.sort());
// Destructive
console.log(letters);

// Slice from index n to index m
// Non-destructive
console.log(a.slice(1, 3));
console.log(a.slice(1));
console.log(a.slice(-2));
console.log(a.slice(-2, -1));
// No arguments - returns a copy of the array
console.log(a);

// reverse is destructive
console.log(letters.reverse());