"use strict";

// Function declarations are function-scoped, not block-scoped
function a() {
  if (true) {
    // block
    function b() {
      console.log("b");
    }
    b(); // Logs `b`

    let c = () => {
      console.log("c");
    };
    c(); // Logs `c`
  }

  b();
  // Sloppy Mode: Function `b` is accessible outside the `if` block because it is hoisted out of the block, to the top of function `a`.
  // Strict Mode: Functions are block scoped

  // c(); // ReferenceError: c is not defined. `let` declarations are block-scoped.
}
a();
