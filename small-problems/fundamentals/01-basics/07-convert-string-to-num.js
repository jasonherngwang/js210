const DIGITS = {
  '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
  '6': 6, '7': 7, '8': 8, '9': 9, '0': 0,
}
const stringToInteger = (str) => {
  let multiplier = 1;
  let integer = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    integer += DIGITS[str[i]] * multiplier;
    multiplier *= 10;
  }
  return integer;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570