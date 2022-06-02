function capsLong(str) {
  return str.length > 10 ? str.toUpperCase() : str;
}
console.log(capsLong('hello'));
console.log(capsLong('hellohellohello'));