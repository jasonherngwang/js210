function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");

// Logs nothing to the console. Returns undefined.

function scream(words) {
  return words + "!!!!";
}

scream("Yipeee");

// Logs nothing to the console. Returns "Yipeee!!!!"