import React, { useEffect, useState } from "react";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);

  useEffect(() => {
    async function fetchUniqueTypes() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();

        const types = data.results.map((type: { name: string }) => type.name);
        setUniqueTypes(types);
      } catch (error) {
        console.error("Error fetching unique Pokémon types:", error);
      }
    }

    fetchUniqueTypes();
  }, []);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectType(event.target.value);
  };

  return (
    <div className="select-div">
      <label htmlFor="type-select">Select a Pokemon Type:</label>
      <select
        id="type-select"
        value={selectedType || ""}
        onChange={handleTypeChange}
      >
        <option value="">All</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonTypeSelection;
