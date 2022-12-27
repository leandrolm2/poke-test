import React from "react";
import { getPokemonList } from "../service/pokeapi";
import { Link } from "react-router-dom";

interface IPokemon {
  name: string;
  url: string;
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<null | IPokemon[]>(null);

  const findPokemons = async () => {
    const data = await getPokemonList();
    setPokemons(data.results);
  };

  React.useEffect(() => {
    findPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemon API</h1>

      <div>
        <h2>pokemon</h2>

        {
          pokemons?.map((pokemon, index) => {
            const { name } = pokemon;
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png `;

            return (
              <Link key={pokemon.name} to={`/details/${index + 1}`}>
                <div>
                  <img src={url} alt="no image" />
                  <span>{name}</span>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Pokedex;
