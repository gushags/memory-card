import { useEffect, useState } from 'react';
import Scoreboard from './scoreboard';
import Card from './card';

function Gameboard() {
  const [pokeUrls, setPokeUrls] = useState(null);
  const [pokeData, setPokeData] = useState([]);
  const [pokemons, setPokemons] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
          response
            .map((data) => {
              return {
                key: data.name,
                pokename: data.name,
                imgUrl: data.sprites.other.dream_world.front_default,
                front: data.sprites.front_default,
                back: data.sprites.back_default,
              };
            })
            .sort(() => Math.random() - 0.5)
        );
      });
    }
  }, [pokeUrls]);

  useEffect(() => {
    if (pokeData) {
      setPokemons(
        pokeData.map((p) => {
          return { ...p, chosen: 0 };
        })
      );
    }
  }, [pokeData]);

  useEffect(() => {
    if (currentScore == 12) {
      setHighScore(currentScore);
      if (confirm('You won!')) {
        newGame();
      }
    } else if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore, newGame]);

  function handleClick(e) {
    console.log(pokemons);
    if (e.currentTarget.getAttribute('chosen') == 0) {
      const newBoard = pokemons
        .map((p) => {
          if (p.pokename == e.currentTarget.getAttribute('name')) {
            return { ...p, chosen: 1 };
          } else {
            return p;
          }
        })
        .sort(() => Math.random() - 0.5);
      setPokemons(newBoard);
      // add 1 to score
      setCurrentScore(currentScore + 1);
    } else {
      // you lose, game is over
      if (confirm('Sorry, you lost. Play again?')) {
        newGame();
      }
    }
  }

  function newGame() {
    const newGame = pokemons
      .map((p) => {
        return { ...p, chosen: 0 };
      })
      .sort(() => Math.random() - 0.5);
    setPokemons(newGame);
    setCurrentScore(0);
  }

  return (
    <>
      <Scoreboard highScore={highScore} currentScore={currentScore} />
      <Card pokemons={pokemons} handleClick={handleClick} />
    </>
  );
}

export default Gameboard;
