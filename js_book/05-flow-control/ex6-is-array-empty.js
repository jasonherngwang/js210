// Empty array [] is a truthy value, so the function will print 'Not Empty'.

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);