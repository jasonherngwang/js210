const objectHasProperty = function (obj, key) {
  return Object.keys(obj).includes(key);
};

let pets = {
  cat: "Simon",
  dog: "Dwarf",
  mice: null,
};

console.log(objectHasProperty(pets, "dog")); // true
console.log(objectHasProperty(pets, "lizard")); // false
console.log(objectHasProperty(pets, "mice")); // true

const incrementProperty = (obj, key) => {
  if (Object.keys(obj).includes(key)) {
    obj[key] += 1;
  } else {
    obj[key] = 1;
  }
  return obj[key];
};

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, "susie")); // 5
console.log(wins); // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, "lucy")); // 1
console.log(wins); // { steve: 3, susie: 5, lucy: 1 }

function copyProperties(obj1, obj2) {
  Object.entries(obj1).forEach((entry) => {
    obj2[entry[0]] = entry[1];
  });
  return Object.keys(obj1).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal)); // 2
console.log(sal); // { model: 9000, enabled: true }

function wordCount(str) {
  const words = str.split(" ");
  let counts = {};
  for (let word of words) {
    if (Object.keys(counts).includes(word)) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}

console.log(wordCount("box car cat bag box")); // { box: 2, car: 1, cat: 1, bag: 1 }
