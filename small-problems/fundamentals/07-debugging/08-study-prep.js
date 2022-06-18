// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  notebook: 9.99,
  pencil: 1.7,
  coffee: 3.0,
  smoothie: 2.1,
};

// Destructuring: name = passedObj.name
function price({ name }) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount = 1) {
  // If we want to clear the item by passing 0 (falsey), amount actually is assigned to 1.
  // amount = amount || 1;

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount; // Overwrite amount
      alreadyInCart = true;
      break;
    }
  }

  // Concise property initializers: { name: name, amount: amount }
  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    total += item.amount * price(item);
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = [];
}

// Example purchase.

updateCart("notebook");
updateCart("pencil", 2);
updateCart("coffee", 1);
// "Oh, wait, I do have pencils..."
updateCart("pencil", 0);

checkout();
// You have been charged $14.69.
