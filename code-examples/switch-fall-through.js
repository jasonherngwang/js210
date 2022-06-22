let a = 5;

switch (a) {
  case 4: // Skipped
    console.log("a is 4");
  case 5: // Matches 5
    console.log("a is 5");
  case 6: // Executes due to fall-through
    console.log("a is 6");
  default: // Executes if nothing else does (assuming no fall-through)
    console.log("a is neither 5, nor 6");
}

switch (a) {
  case 4: // Skipped
    console.log("a is 4");
    break;
  case 5: // Matches 5 and breaks out of the statement
    console.log("a is 5");
    break;
  case 6:
    console.log("a is 6");
    break;
  default:
    console.log("a is neither 5, nor 6");
}
