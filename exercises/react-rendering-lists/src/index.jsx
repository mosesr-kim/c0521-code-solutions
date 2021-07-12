import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class PokedexList extends React.Component {
  render() {
    const pokemonList = pokedex.map(pokemon =>
      <li key={pokemon.name}>{pokemon.name}</li>
    );
    return (
      <ul>{pokemonList}</ul>
    );
  }
}

ReactDOM.render(
  <PokedexList />,
  document.getElementById('root')
);
