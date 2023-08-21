import PokemonRows from "./PokemonRow.jsx";

const PokedexTable = ({ pokemonArray }) => {
  return (
    <table className="container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Types</th>
          <th>Sprite</th>
        </tr>
      </thead>
      <tbody>
        {pokemonArray.map((pokemon) => (
          <PokemonRows key={pokemon.id} pokemon={pokemon} />
        ))}
      </tbody>
    </table>
  );
};

export default PokedexTable;
