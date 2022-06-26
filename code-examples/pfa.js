function makeCar(brand, model, color) {
  return `${brand} ${model} in ${color}`;
}

function makeFactory(brand) {
  // Provide 2 out of 3 arguments needed
  return function makeBrandedCar(model, color) {
    // Uses `brand` from closure of `makeBrandedCar`
    return makeCar(brand, model, color);
  };
}

let teslaFactory = makeFactory("Tesla");
console.log(teslaFactory("Model S", "Red")); // Tesla Model S in Red
