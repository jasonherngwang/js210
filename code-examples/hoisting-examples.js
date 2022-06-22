// Function expression !== declaration
// For function expressions, the function is not hoisted in its entirety.
// Cannot call function expressions before they are defined.
bar(); // ReferenceError

let bar = function () {
  console.log("hello friends");
};
