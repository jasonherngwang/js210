// Example: Function Declaration
// -----------------------------------------------------------------------------
boo();                    // Ignored during Creation Phase

function boo() {          // Add identifier `foo` to global scope
  console.log("Boo!");
}

// Equivalent code
// -----------------------

// Creation Phase
function boo() {
  console.log("Boo!");
}

// Execution Phase
boo();


// Example: `let` Variable and Function Have Same Name
// -----------------------------------------------------------------------------
let foo = "hello";           // Add identifier `foo` to global scope.

function foo() {             // SyntaxError; cannot re-declare `foo` in global scope
  console.log("hello");
}


// Example: `let` Variable and Function Have Same Name
// -----------------------------------------------------------------------------
function foo() {             // Add identifier `foo` to global scope.
  console.log("hello");
}

let foo = "hello";           // SyntaxError; cannot re-declare `foo` in global scope


// Example: `var` Variable and Function Have Same Name
// -----------------------------------------------------------------------------
bar();                         // Ignored during Creation Phase

var bar = 'hello';             // Add identifier `bar` to global scope, splitting declaration and assignment

function bar() {               // Add identifier `bar` to global scope.
  console.log('world');        // Re-declaration is allowed with `var`. Doesn't change existing value referenced.
}


// Equivalent code
// -----------------------

// Creation Phase
function bar() {               // Functions hoisted above variables.
  console.log('world');
}

// Execution Phase
bar();
bar = 'hello';                 // Assignment occurs.


// Example: `var` Variable and Function Have Same Name
// -----------------------------------------------------------------------------
bar();                         // Ignored during Creation Phase

function bar() {               // Add identifier `bar` to global scope.
  console.log('world');
}

var bar = 'hello';             // Add identifier `bar` to global scope, splitting declaration and assignment
                               // Re-declaring without assignment does not change what existing `var` variable references.
console.log(bar);              // 'hello' (after reassignment)

// Equivalent code
// -----------------------

// Creation Phase
function bar() {               // Functions hoisted above variables.
  console.log('world');
}

var bar;                       // Re-declaration of existing variable doesn't change anything.

// Execution Phase
bar();
bar = 'hello';                 // Assignment occurs.
console.log(bar);              // 'hello'

// Example: Functions Hoisted ABOVE Variables
// -----------------------------------------------------------------------------
bar();                        // Ignored during Creation Phase
var foo = 'hello';            // Add identifier `foo` to global scope
                              // Hoists `foo` to top, splitting declaration and assignment

function bar() {              // Add identifier `bar` to global scope.
  console.log(foo);           // Hoists `bar` to top, ABOVE `foo`
}

// Equivalent code
// -----------------------

// Creation Phase
function bar() {              // Functions hoisted above variables
  console.log(foo);
}

var foo;                      // Variable declaration hoisted
                              // Supplied initial value 'hello' not yet assigned
                              // Assigned `undefined` by default

// Execution Phase

bar();                        // bar() references `foo` which is an identifier JS recognizes
                              // However, `foo` is currently assigned to `undefined` and not yet 'hello'
foo = 'hello';                // Assignment occurs