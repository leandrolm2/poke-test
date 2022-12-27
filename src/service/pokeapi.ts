import PokeAPI from "../config/pokeAPI";

export const getPokemonList = async () => {
  const response = await PokeAPI.get("pokemon");

  return response.data;
};

export const getPokemonDetail = async (id: string | number) => {
  const response = await PokeAPI.get(`/pokemon/${id}`);
  return response.data;
};
