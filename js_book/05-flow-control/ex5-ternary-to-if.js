function foo() {
  return false;
}

function qux() {
  return 'qux';
}

// return foo() ? 'bar' : qux();
if (foo()) {
  return 'bar';
} else {
  return qux();
}