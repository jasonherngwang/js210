const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// Variables are immutably bound to the initial value they are initialized to. Therefore, the constant `NAME` cannot be reassigned to the string `'Joe'`. This raises a TypeError exception.