import { useEffect, useState } from 'react';
// import fetchPokemonList from '../api/pokemon';
import Card from './card';

function Gameboard() {
  //
  // useEffect and an async call to the api
  // to get the names of the pokemon
  // as well as sprites if I want to use them

  const [pokeUrls, setPokeUrls] = useState(null);
  const [pokeData, setPokeData] = useState([]);

  // fetch 12 pokemon urls
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((res) => res.json())
      .then((data) => setPokeUrls(data.results))
      .catch((err) => console.error(err));
  }, []);

  // This is only returning the last one and it's a promise, probably because fetch
  // is returning a promise

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

  // Fix this ===>
  return (
    <>
      <h1>Test</h1>
      {pokeData &&
        pokeData.map((pokemon) => (
          <>
            <div className='card' key={pokemon.key}>
              <div className='top-sprites'>
                <img src={pokemon.front} />
                <img src={pokemon.back} alt='' />
              </div>
              <img src={pokemon.imgUrl} alt={pokemon.pokename} />
              <h3 className='title'>{capitalize(pokemon.pokename)}</h3>
              <div className='bottom-sprites'>
                <img src={pokemon.front} />
                <img src={pokemon.back} alt='' />
              </div>
            </div>
          </>
        ))}
    </>
  );
}

export default Gameboard;

// // return function with map example
// return (
//   <div id='education'>
//     <h2>Education section</h2>
//     {educationList.map((edu, index) => (
//       <div key={index}>
//         <hr />
//         <Field
//           label='School'
//           value={edu.school}
//           onChange={(e) => handleChange(index, 'school', e.target.value)}
//         />
//         <Field
//           label='Degree'
//           value={edu.degree}
//           onChange={(e) => handleChange(index, 'degree', e.target.value)}
//         />
//         <Field
//           label='Date of Study'
//           value={edu.dateOfStudy}
//           onChange={(e) => handleChange(index, 'dateOfStudy', e.target.value)}
//         />
//       </div>
//     ))}
//     <button onClick={addEducation}>Add More Education</button>
//   </div>
// );

// function StoreTable() {
//   const { page, perPage } = useProductPagination();
//   const [pokeData, setPokeData] = useState([]); // based on your data you should store it here in state

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const result = await fetchPokemonList();
//         setPokeData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchPokemonData();
//   }, []);
