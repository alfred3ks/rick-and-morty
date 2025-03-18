import { useEffect, useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchApiRick = async () => {
      try {
        // hacemos la peticion a la API de rick and morty
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        // console.log(data);
        // console.log(data.results);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiRick();
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>

      {characters.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={`imagen de  ${character.name}`} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
