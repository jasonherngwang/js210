function numSuffix(num) {
  if ([11, 12, 13].includes(num)) {
    return "th";
  } else if (num % 10 === 1) {
    return "st";
  } else if (num % 10 === 2) {
    return "nd";
  } else if (num % 10 === 3) {
    return "rd";
  } else {
    return "th";
  }
}

function dateSuffix(date) {
  return `${date}${numSuffix(date)}`;
}

function formattedMonth(month) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

function formattedDayOfWeek(day) {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[day];
}

function formattedDate(date) {
  let dayOfMonth = dateSuffix(date.getDate());
  let dayOfWeek = formattedDayOfWeek(date.getDay());
  let month = formattedMonth(date.getMonth());
  return `${dayOfWeek}, ${month} ${dayOfMonth}`
}

let today = new Date();
console.log(today);
console.log(`Today's day is ${formattedDate(today)}`);

console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(`Tomorrow is ${formattedDate(tomorrow)}`);

let nextWeek = new Date(today.getTime());
console.log(today === nextWeek); // false; different objects

console.log(today.getDate() === nextWeek.getDate()); // true; the primitives (numbers) are equal
console.log(today.getMonth() === nextWeek.getMonth());
console.log(today.getYear() === nextWeek.getYear());
console.log(today.toDateString() === nextWeek.toDateString());
console.log(today.toDateString());
console.log(nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7)
console.log(`Next week is ${formattedDate(nextWeek)}`);
console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));