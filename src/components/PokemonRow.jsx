const PokemonRow = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>{pokemon.types.join(", ")}</td>
      <td id="sprite">
        <img src={pokemon.sprite} alt={pokemon.name} />
      </td>
    </tr>
  );
};

export default PokemonRow;
