import React from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../service/pokeapi";
import "../style/details.css";

const Details = () => {
  const { id: indexPokemon } = useParams();

  const [pokeDetails, setPokemon] = React.useState<any>(null);

  const findPokemon = async (): Promise<void> => {
    const data = await getPokemonDetail(indexPokemon!);

    data.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png `;

    setPokemon(data);
  };

  React.useEffect(() => {
    findPokemon();
  }, []);

  if (!pokeDetails) return <h1>Loading...</h1>;
  console.log(pokeDetails)
  return (
    <div className="bg-zinc-400 100vh min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-items-center flex-col items-center	m-auto rounded shadow bg-lime-200	p-5">
        <h1>
          {pokeDetails.name} - {indexPokemon}
        </h1>

        <img src={pokeDetails.image} alt="no content" />

        <div>
          {pokeDetails.types.map((type: any, index: number) => {
            return <div key={index}>{type.type.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
