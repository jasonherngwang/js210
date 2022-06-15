// Linear search on unordered array
const indexOf = (array, value) => {
  for (let index = 0; index < array.length; index += 1) {
    if (value === array[index]) return index;
  }
  return -1;
};
console.log(indexOf([1, 2, 3, 3], 3)); // 2
console.log(indexOf([1, 2, 3], 4)); // -1

const lastIndexOf = (array, value) => {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (value === array[index]) return index;
  }
  return -1;
};
console.log(lastIndexOf([1, 2, 3, 3], 3)); // 3
console.log(lastIndexOf([1, 2, 3], 4)); // -1
