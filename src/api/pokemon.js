// pokemon.js

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12';

async function fetchPokemonList() {
  try {
    const response = await fetch(pokeApiUrl);
    const pokemonData = await response.json();
    const pokemons = pokemonData.results.map(async (element) => {
      const data = await fetchPokemonSprites(element.url);
      let frontSprite = data.front_default;
      let backSprite = data.back_default;

      return {
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
  return data.sprites;
}

const list = fetchPokemonList();
console.log(list);
