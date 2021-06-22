console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'player 1',
    hand: {}
  },
  {
    name: 'player 2',
    hand: {}
  },
  {
    name: 'player 3',
    hand: {}
  },
  {
    name: 'player 4',
    hand: {}
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
console.log(shuffledDeck);
function dealTwoCards() {
  for (var i = 0; i < players.length; i++) {
    players[i].hand = {
      firstCard: shuffledDeck[0],
      secondCard: shuffledDeck[1]
    };
    shuffledDeck.splice(0, 1);
    shuffledDeck.splice(1, 1);
    console.log(shuffledDeck);
  }
  return players;
}
dealTwoCards();
function declareWinner() {
  var winner = null;
  var value = [];
  var highestHand = 0;
  var total = 0;
  for (var i = 0; i < players.length; i++) {
    value.push(players[i].hand.firstCard.rank);
    value.push(players[i].hand.secondCard.rank);
    for (var z = 0; z < value.length; z++) {
      if ((value[z] === 'Jack') || (value[z] === 'Queen') || (value[z] === 'King')) {
        total += 10;
      } else if ((value[z] === 'Ace')) {
        total += 11;
      } else {
        total += value[z];
      }
    }
    if (total > highestHand) {
      highestHand = total;
      winner = players[i];
    }
    total = 0;
  }
  return winner.name;
}
console.log(declareWinner(), 'is the winner!');
