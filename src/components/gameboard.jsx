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
    if (pokeUrls && pokeUrls.length === 12) {
      pokeUrls.map((poke) =>
        setPokeData(
          fetch(poke.url)
            .then((res) => res.json())
            .then((data) => {
              return {
                key: data.name,
                pokename: data.name,
                imgUrl: data.sprites.other.dream_world.front_default,
                front: data.sprites.front_default,
                back: data.sprites.back_default,
              };
            })
        )
      );
    }
  }, [pokeUrls]);

  if (pokeData || pokeUrls) {
    console.log(pokeData);
    console.log(pokeUrls);
  }

  // useEffect(() => {
  //   const fetchPokemonList = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://pokeapi.co/api/v2/pokemon?limit=12'
  //       );
  //       const pokemonData = await response.json();
  //       const pokemons = pokemonData.results.map(async (element) => {
  //         const data = await fetchPokemonSprites(element.url);
  //         setPokeData([
  //           {
  //             key: data.name,
  //             pokename: data.name,
  //             imgUrl: data.sprites.other.dream_world.front_default,
  //             front: data.sprites.front_default,
  //             back: data.sprites.back_default,
  //           },
  //         ]);
  //         // need to set pokedata equal to these value each time through the map
  //       });

  //       console.log(pokeData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   async function fetchPokemonSprites(url) {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data;
  //   }
  //   fetchPokemonList();
  // }, []);

  // Fix this ===>
  return (
    <>
      <h1>Test</h1>
      {/* {pokeData.map((key, pokename, imgUrl, front, back) => (
        <Card
          key={key}
          pokename={pokename}
          imgUrl={imgUrl}
          front={front}
          back={back}
        />
      ))} */}
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
