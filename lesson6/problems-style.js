// 6.1 Use single quotes '' for strings. eslint: quotes
// let title = "The Three-Body Problem";

// Fixed
let title = 'The Three-Body Problem';


// 13.2 Use one const or let declaration per variable or assignment. eslint: one-var
// Use camelCase, not snake_case for page_count
// let title2 = 'The Three-Body Problem',
//     author = 'Cixin Liu',
//     page_count = 400;

// Fixed
let title2 = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;


// 15.1 Use === and !== over == and !=. eslint: eqeqeq
// let completed = lastPageRead == 400;
let completed = lastPageRead === 400;

// Use braces with all multiline blocks. eslint: nonblock-statement-body-position
// if (finishedBook())
//   console.log('You have finished reading this book');

// Fix 1
if (finishedBook()) console.log('You have finished reading this book');
// Fix 2
if (finishedBook()) {
  console.log('You have finished reading this book');
}

// 7.1 Use named function expressions instead of function declarations. eslint: func-style
// 19.1 Use soft tabs (space character) set to 2 spaces. eslint: indent
// 19.4 Set off operators with spaces. eslint: space-infix-ops
// 22.2 Strings: eslint: no-new-wrappers
// Use explicit string coercion
// function read(pages) {
//   console.log('You started reading.');
//   for (let page=0; page<pages; page += 1) {
//           let message = 'You read page '+page;
//           console.log(message);
//   }
// }

// read(400);

// Fixed
let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);