let counter = 0;

// infinte loop due to assignment in conditional.
// `counter = 1` returns `1` which is truthy and evaluates to `true`
while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}