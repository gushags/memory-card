// pokemon.js

async function fetchPokemonList() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    const pokemonData = await response.json();
    const pokemons = pokemonData.results.map(async (element) => {
      const data = await fetchPokemonSprites(element.url);
      console.log(data);
      let frontSprite = data.front_default;
      let backSprite = data.back_default;

      return {
        // look in 'other' which has all the actual images in svg
        key: element.name,
        name: element.name,
        imgUrl: `assets/img/${element.name}.png`,
        front: frontSprite,
        back: backSprite,
      };
    });
    return pokemons;
  } catch (err) {
    console.error(err);
  }
}

async function fetchPokemonSprites(url) {
  const response = await fetch(url);
  const data = await response.json();
  // send sprites data only to calling function
  return data;
}

const list = fetchPokemonList();

// console.log(list);
