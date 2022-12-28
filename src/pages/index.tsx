import React from "react";
import { getPokemonList } from "../service/pokeapi";
import { Link } from "react-router-dom";

interface IPokemon {
  name: string;
  url: string;
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<null | IPokemon[]>(null);
  const [search, setSearch] = React.useState<string>("");

  const findPokemons = async () => {
    const data = await getPokemonList();
    setPokemons(data.results);
    
  };

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  React.useEffect(() => {
    findPokemons();
  }, []);

  

  return (
    <div className="flex items-center flex-col bg-lime-500">
      <div>
        <h1 className="text-3xl font-bold underline">Pokemon API</h1>
      </div>

      <div>
        <input
          type="search"
          id="site-search"
          className="p-2 mt-5 rounded shadow bg-lime-200"
          placeholder="Pesquise um pokemon"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap">
        {pokemons
          ?.filter((pokemon) => {

            if (!search.length) return true;

            return pokemon.name.includes(search) ? true : false;
          })
          .map((pokemon, index) => {
            const { name, url: urlFindIndex} = pokemon;
            const indexPokemon = (url:string) => {
              const myUrl = url;
              const urlParts = myUrl.split('/');
          
              let index = null;
          
              for (const part of urlParts) {
                  if (part.match(/^\d+$/)) {
                      index = part;
                      break;
                  }
              }
          
              return Number(index)
            };

            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon(urlFindIndex)}.png `;

            return (
              <Link
                key={pokemon.name}
                to={`/details/${index + 1}`}
                className="flex justify-items-center flex-col items-center	m-10 rounded shadow bg-lime-200	p-5"
              >
                <img src={url} alt="no image" />
                <span>{name}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Pokedex;
