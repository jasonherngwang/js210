// Declared Scope
// Block: let, const, class, function (strict mode)
// Function: var, function (sloppy mode)

// Visibility Scope

// All of these have visibility scope of global
let foo = 1;
const bar = 2;
var baz = 3;
function qux() {}

if (true) {
  // Inside a block
  let foo = 1; // local (block)
  const bar = 2; // local (block)
  var baz = 3; // global
  function qux() {} // global
}

// Function `bar` has visibility scope of global
function bar() {
  // Inside a function
  let foo = 1; // local (function `bar`)
  const bar = 2; // local (function `bar`)
  var baz = 3; // local (function `bar`)
  function qux() {} // local (function `bar`)

  if (true) {
    // Inside a block inside a function
    let foo = 1; // local (block)
    const bar = 2; // local (block)
    var baz = 3; // local (function `bar`)
    function qux() {} // local (function `bar`)
  }
}
