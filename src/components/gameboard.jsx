import { useEffect, useState } from 'react';

function Gameboard() {
  const [pokeUrls, setPokeUrls] = useState(null);
  const [pokeData, setPokeData] = useState([]);

  // fetch 12 pokemon urls
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((res) => res.json())
      .then((data) => setPokeUrls(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (pokeUrls) {
      const pokemon1 = fetch(pokeUrls[0].url).then((res) => res.json());
      const pokemon2 = fetch(pokeUrls[1].url).then((res) => res.json());
      const pokemon3 = fetch(pokeUrls[2].url).then((res) => res.json());
      const pokemon4 = fetch(pokeUrls[3].url).then((res) => res.json());
      const pokemon5 = fetch(pokeUrls[4].url).then((res) => res.json());
      const pokemon6 = fetch(pokeUrls[5].url).then((res) => res.json());
      const pokemon7 = fetch(pokeUrls[6].url).then((res) => res.json());
      const pokemon8 = fetch(pokeUrls[7].url).then((res) => res.json());
      const pokemon9 = fetch(pokeUrls[8].url).then((res) => res.json());
      const pokemon10 = fetch(pokeUrls[9].url).then((res) => res.json());
      const pokemon11 = fetch(pokeUrls[10].url).then((res) => res.json());
      const pokemon12 = fetch(pokeUrls[11].url).then((res) => res.json());

      Promise.all([
        pokemon1,
        pokemon2,
        pokemon3,
        pokemon4,
        pokemon5,
        pokemon6,
        pokemon7,
        pokemon8,
        pokemon9,
        pokemon10,
        pokemon11,
        pokemon12,
      ]).then((response) => {
        setPokeData(
          response.map((data) => {
            return {
              key: data.name,
              pokename: data.name,
              imgUrl: data.sprites.other.dream_world.front_default,
              front: data.sprites.front_default,
              back: data.sprites.back_default,
            };
          })
        );
      });
    }
  }, [pokeUrls]);

  if (pokeUrls && pokeData) {
    console.log(pokeData);
  }

  function capitalize(word) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
  }

  return (
    <>
      {pokeData &&
        pokeData.map((pokemon) => (
          <div className='card' key={pokemon.key}>
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
    </>
  );
}

export default Gameboard;
