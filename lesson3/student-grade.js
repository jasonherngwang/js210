/*
Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
You may assume that all input values are valid positive integers.

Algo
- Initialize variables
  - array to hold scores
- Ask user to specify number of scores to be collected
- Execute a loop that will collect the scores
- Prompt the user for a score.
  - Convert each score to a Number.
  - Add each score to the scores array
- Calculate the average of scores in the array.
  - Sum the numbers
  - Divide by array length
- Use an if...else statement to determine if the letter grade.

*/

const rlSync = require('readline-sync');

const average = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0)
  return sum / arr.length;
}

const numScores = parseInt(rlSync.question('How many scores? '), 10);

const scores = [];
for (let counter = 1; counter <= numScores; counter += 1) {
  const score = parseInt(rlSync.question(`Enter score ${counter}: `), 10);
  scores.push(score);
}

const averageScore = average(scores);
let grade = 'F';
if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B';
} else if (averageScore >= 50) {
  grade = 'C';
}

console.log(`Your ${numScores} scores average to ${Math.round(averageScore)}. Your grade is "${grade}".`)