try {
  console.log(undefined.something);
} catch (exception) {
  console.log("Caught exception: " + exception);
} finally {
  console.log("Finally");
}

let pets = ["cat", undefined, "dog", "fish"];

pets.forEach(function (pet) {
  try {
    console.log(`${pet}: ${pet.length}`);
  } catch {
    console.log("Caught exception");
  }
});
