import React from 'react';
import './App.css';
import Props from './types/pokemons'


const pokedex: React.FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.type}</p>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
    </div>
  )
}


export default pokedex;
