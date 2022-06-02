let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// These have the same output:
for (var index = 0; index < 10; ++index) {
  console.log(index);
}
for (var index = 0; index < 10; index++) {
  console.log(index);
}