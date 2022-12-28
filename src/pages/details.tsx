import React from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../service/pokeapi";
import "../style/details.css";

const Details = () => {
  const { id: indexPokemon } = useParams();

  const [pokeDetails, setPokemon] = React.useState<any>(null);

  const findPokemon = async (): Promise<void> => {
    const data = await getPokemonDetail(indexPokemon!);
    console.log(data);

    data.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png `;

    setPokemon(data);
  };

  React.useEffect(() => {
    findPokemon();
  }, []);

  if (!pokeDetails) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <h1>
          Detalhes {pokeDetails.name} - {indexPokemon}
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
