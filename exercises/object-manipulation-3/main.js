var players = [
  {
    name: 'player 1',
    hand: {},
    value: 0
  },
  {
    name: 'player 2',
    hand: {},
    value: 0
  },
  {
    name: 'player 3',
    hand: {},
    value: 0
  },
  {
    name: 'player 4',
    hand: {},
    value: 0
  }
];
var deck = [];
var suit = ['club', 'diamond', 'heart', 'spade'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
function createDeck() {
  for (var i = 0; i < suit.length; i++) {
    for (var z = 0; z < rank.length; z++) {
      deck.push({ suit: suit[i], rank: rank[z] });
    }
  }
  return deck;
}
var shuffledDeck = _.shuffle(createDeck());
function dealTwoCards() {
  for (var i = 0; i < players.length; i++) {
    players[i].hand = {
      firstCard: shuffledDeck[0],
      secondCard: shuffledDeck[1]
    };
    shuffledDeck.splice(0, 1);
    shuffledDeck.splice(1, 1);
  }
  return players;
}
dealTwoCards();
var winner;
function declareWinner() {
  for (var i = 0; i < players.length; i++) {
    for (var key in players[i].hand) {
      if ((players[i].hand[key].rank === 'Jack') || (players[i].hand[key].rank === 'Queen') || (players[i].hand[key].rank === 'King')) {
        players[i].value += 10;
        break;
      }
      if ((players[i].hand[key].rank === 'Ace')) {
        players[i].value += 11;
        break;
      }
      players[i].value += players[i].hand[key].rank;
    }
  }
  var total = 0;
  for (var z = 0; z < players.length; z++) {
    if (players[z].value > total) {
      winner = players[z];
      total = players[z].value;
    }
  }
}
declareWinner();
console.log(`The winner is ${winner.name} with the value of ${winner.value}`);
