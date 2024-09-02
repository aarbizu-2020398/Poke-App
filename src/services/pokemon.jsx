const apikey_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/docs/v2#pokemon?api_key=${api_key}limit=${limit}`);
    id : Pokemon.id,
    name : Pokemon.name,
    types: Pokemon.name,
  }))

  return pokemons

 }catch (err){

  console.error(err)
 }

