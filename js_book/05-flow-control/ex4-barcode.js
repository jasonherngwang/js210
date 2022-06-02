// Case clauses lack `break` statements. First condition is skipped. Second condition is matched, and subsequent branches are also executed.
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}
barCodeScanner('113');

function barCodeScanner2(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
      break;
  }
}
barCodeScanner2('113');