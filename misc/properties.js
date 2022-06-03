let sherlock = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London',
    country: 'England',    
  },
};
let watson = {
  name: 'Dr. Watson',
  address: sherlock.address,
};

console.log(sherlock);
console.log(watson);

// Watson moves to America
watson.address.street = '123 Main St.';
watson.address.city = 'New York';
watson.address.country = 'USA';

console.log(sherlock);
console.log(watson);

// Nonexistent property returns undefined
console.log(sherlock.son);

// What if property points to undefined?
sherlock.son = undefined;
console.log(sherlock.son);

// Swapping property values
let singer = {surname: 'Turner'};
let pilot = {surname: 'Kamal'};

// Destructuring assignment
[singer.surname, pilot.surname] = [pilot.surname, singer.surname];

// Using a temporary variable
// let tempSurname = singer.surname;
// singer.surname = pilot.surname;
// pilot.surname = tempSurname;

console.log(singer.surname); // "Kamal"
console.log(pilot.surname); // "Turner"

