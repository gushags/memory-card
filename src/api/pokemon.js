// pokemon.js

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12';

async function fetchPokemonList() {
  try {
    const response = await fetch(pokeApiUrl);
    const pokemonData = await response.json();
    const pokemons = await pokemonData.results.map((element) => {
      return {
        name: element.name,
        imgUrl: `assets/img/${element.name}.png`,
      };
    });
    console.log(pokemons); // prints an array of 12 pokemons
    return pokemons;
  } catch (err) {
    console.error(err);
  }
}

const list = fetchPokemonList();
console.log(list);
