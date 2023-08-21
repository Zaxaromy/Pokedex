import { useState, useEffect } from "react";

const MainContent = () => {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [selectedType, setSelectedType] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    async function fetchAllPokemonData() {
      try {
        const totalPokemonCount = 100;
        const limit = 20;
        let offset = 0;

        const fetchedPokemonArray = [];

        while (offset < totalPokemonCount) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
          );
          const data = await response.json();

          for (const pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();

            const newPokemon = {
              id: pokemonData.id,
              name: pokemonData.name,
              types: pokemonData.types.map((type) => type.type.name),
              sprite: pokemonData.sprites.front_default,
            };

            fetchedPokemonArray.push(newPokemon);
          }

          offset += limit;
        }

        setPokemonArray(fetchedPokemonArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    }

    fetchAllPokemonData();
  }, []);

  return {
    pokemonArray,
    selectedType,
    loading,
    handleTypeSelect,
  };
};

export default MainContent;
