function oddLengths(arr) {
  let lengths = arr.map(function (str) {
    return str.length;
  });
  return lengths.filter(function (l) {
    return l % 2 !== 0;
  });
}

function oddLengths(arr) {
  return arr
    .map((string) => string.length)
    .filter((length) => length % 2 !== 0);
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
