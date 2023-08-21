import { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";
import PaginationControls from "./PaginationControls";

const FilterablePokedexTable = ({ pokemonArray }) => {
  const [selectedType, setSelectedType] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const filteredPokemon = selectedType
    ? pokemonArray.filter((pokemon) => pokemon.types.includes(selectedType))
    : pokemonArray;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemonPage = filteredPokemon.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={handleTypeSelect}
      />
      <PokedexTable pokemonArray={currentPokemonPage} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default FilterablePokedexTable;
