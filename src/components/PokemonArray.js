const pokemonArray = [];

async function fetchPokemonData(offset, limit) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    const fetchedPokemonArray = [];

    for (const page of data.results) {
      const pageResponse = await fetch(page.url);
      const pageData = await pageResponse.json();

      const newPokemon = {
        id: pageData.id,
        name: pageData.name,
        types: pageData.types.map((type) => type.type.name),
        sprite: pageData.sprites.front_default,
      };

      fetchedPokemonArray.push(newPokemon);
    }

    setPokemonArray(fetchedPokemonArray);
    console.log("Fetched Pokémon data:", fetchedPokemonArray);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

fetchPokemonData();

export default pokemonArray;
