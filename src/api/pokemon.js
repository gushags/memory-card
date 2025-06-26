// pokemon.js

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12';
let pokemons = [];

async function fetchPokemonList() {
  const response = await fetch(pokeApiUrl);
  const pokemonData = await response.json();
  pokemons = await pokemonData.results.map((element) => {
    return {
      name: element.name,
      imgUrl: `assets/img/${element.name}.png`,
    };
  });
}

function generatePokemons(pokemons) {
  return pokemons;
}

const list = fetchPokemonList();
console.log(list);
