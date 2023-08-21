import LoadingScreen from "./LoadingScreen";
import FilterablePokedexTable from "./FilterablePokedexTable";
import PokemonTypeSelection from "./PokemonTypeSelection";

const AppRoutes = ({
  loading,
  selectedType,
  handleTypeSelect,
  pokemonArray,
}) => {
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={handleTypeSelect}
      />
      <div style={{ paddingTop: "30px" }}>
        <FilterablePokedexTable
          pokemonArray={pokemonArray}
          selectedType={selectedType}
          selectType={handleTypeSelect}
        />
      </div>
    </>
  );
};

export default AppRoutes;
