// Not recommended, but allowed since `tmp` is not declared in this outer scope
tmp = "abc";

if (true) {
  // Entering scope of `tmp`; TDZ starts
  // `tmp` is uninitialized:
  // tmp = "abc"; // ReferenceError: Cannot access 'tmp' before initialization
  // console.log(tmp); // ReferenceError: Cannot access 'tmp' before initialization

  let tmp; // TDZ ends
  console.log(tmp); // Prints undefined
}

// TDZ is time-based
if (true) {
  // entering scope of `myVar`; TDZ starts
  const func = () => {
    console.log(myVar); // executed later
  };

  // We are within the TDZ:
  // Accessing `myVar` causes `ReferenceError`
  // console.log(myVar);

  let myVar = 3; // TDZ ends
  func(); // OK, called outside TDZ
}
