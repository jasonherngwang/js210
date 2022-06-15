// 1. Function to access last element
let lastInArray = (arr) => arr[arr.length - 1];

console.log(lastInArray([1, 2, 3, 4]));

// 2. Roll call
let rollCall = (arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
};

let firstNames = ["Jason", "John", "Jack"];
rollCall(firstNames);

// 3. Reverse array
let reverse = (arr) => {
  let reversedArr = [];
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    reversedArr.push(arr[index]);
  }
  return reversedArr;
};

let foods = ["pizza", "chicken", "hot dog"];
console.log(reverse(foods));

// 4. Concatenate all elements into 1 string
let concatElems = (arr) => {
  result = "";
  for (let index = 0; index < arr.length; index += 1) {
    result += String(arr[index]);
  }
  return result;
};

let drinks = ["Coke", "Pepsi", "root beer"];
console.log(concatElems(drinks));
