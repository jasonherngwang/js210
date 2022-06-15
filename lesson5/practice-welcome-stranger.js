function greetings(arr, obj) {
  const fullName = arr.join(' ');
  const fullTitle = `${obj.title} ${obj.occupation}`;
  return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output
//Hello, John Q Doe! Nice to have a Master Plumber around.