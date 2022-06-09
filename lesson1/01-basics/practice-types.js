let x = '13';
let y = 9;
console.log(x + y); // If either is string, converts other to string and concats
console.log(Number(x) + y); // If neither string, converts to number and adds
console.log(parseInt(x, 10) + y);


console.log(x * y); // Arithmetic operators other than + will coerce to numbers (including NaN).

let npa = 212;
let nxx = 555;
let num = 1212;
console.log('' + npa + nxx + num);
console.log(String(npa) + nxx + num);
console.log(npa.toString() + nxx + num);

let bool = true;
console.log(bool.toString());     // true
let arr = [1, 2, 3];
console.log(arr.toString());      // 1,2,3 (not what we expected)
console.log(JSON.stringify(arr)); // [1,2,3]