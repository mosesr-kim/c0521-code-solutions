console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [{ name: 'player 1', hand: '' }, { name: 'player 2', hand: '' },
  { name: 'player 3', hand: '' }, { name: 'player 4', hand: '' }];
var deck = [];
var suit = ['club', 'diamond', 'heart', 'spade'];
var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
for (var i = 0; i < suit.length; i++) {
  for (var z = 0; z < rank.length; z++) {
    deck.push({ suit: suit[i], rank: rank[z] });
  }
}
