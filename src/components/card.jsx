function Card({ pokemons, handleClick }) {
  function capitalize(word) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
  }
  return (
    <div id='card-container'>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div
            className='card'
            key={pokemon.key}
            name={pokemon.pokename}
            chosen={pokemon.chosen}
            onClick={handleClick}
          >
            <div className='top-sprite-left'>
              <img src={pokemon.front} />
            </div>
            <div className='top-sprite-right'>
              <img src={pokemon.back} alt='' />
            </div>
            <img
              className='main-img'
              src={pokemon.imgUrl}
              alt={pokemon.pokename}
            />
            <div className='bottom-sprite-left'>
              <img src={pokemon.back} alt='' />
            </div>
            <div className='bottom-sprite-right'>
              <img src={pokemon.front} />
            </div>
            <h3 className='title'>{capitalize(pokemon.pokename)}</h3>
          </div>
        ))}
    </div>
  );
}

export default Card;
