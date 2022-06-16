'use strict'; // pragma

// Implicit global variables; need to declare with `const`
// SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
// RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//   "10", "Jack", "Queen", "King", "Ace"];
const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
  "10", "Jack", "Queen", "King", "Ace"];

// Style: Use named function expressions instead of function declaration
function createDeck() {
  // Implicit global variable
  // allCards = () => {
  let allCards = () => {
    // `this` is set to global object?
    // return this.SUITS.reduce((deck, suit) => {
    return SUITS.reduce((deck, suit) => {
      // this.RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  // deck = allCards();
  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  // Implicit global variables: counter, randomIndex, tempCard
  // Octal 0400
  // for (counter = 0; counter < 0400; counter += 1) {
  for (let counter = 0; counter < 256; counter += 1) {
    // randomIndex1 = randomCardIndex();
    // randomIndex2 = randomCardIndex();
    // tempCard = deck[randomIndex1];
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  // function randomCardIndex() {
  function randomCardIndex() {
    // return Math.floor(Math.random() * this.deck.length);
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());