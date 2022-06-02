// function oddLengths(arr) {
//   return arr.reduce(
//     (acc, elem) => (elem.length % 2 !== 0 ? acc.concat(elem.length) : acc),
//     []
//   );
// }

function oddLengths(arr) {
  return arr.reduce((acc, elem) => {
    return elem.length % 2 !== 0 ? acc.concat(elem.length) : acc;
  }, []);
}

// function oddLengths(arr) {
//   return arr.reduce(
//     function(acc, elem) {
//       if (elem.length % 2 !== 0) {
//         return acc.concat(elem.length);
//       } else {
//         return acc;
//       }
//     }, []);
// }

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
